import { XMLParser } from "fast-xml-parser";

export interface BehanceProject {
  id: string;
  title: string;
  link: string;
  description: string;
  imageUrl: string;
  pubDate: string;
  tags: string[];
}

export async function getBehanceProjects(): Promise<BehanceProject[]> {
  try {
    const response = await fetch(
      "https://www.behance.net/feeds/user?username=emilgonzalez",
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Behance feed");
    }

    const xmlData = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    });
    const parsedData = parser.parse(xmlData);

    const items = parsedData?.rss?.channel?.item || [];

    // Ensure items is an array (it might be a single object if there's only one item)
    const itemsArray = Array.isArray(items) ? items : [items];

    return itemsArray.map((item: any) => {
      // Extract image URL from description HTML
      // The format is usually <img src='url' ... />
      const description = item.description || "";
      const imgRegex = /src=['"]([^'"]+)['"]/;
      const match = description.match(imgRegex);
      const imageUrl = match ? match[1] : "";

      // Clean up title (sometimes has CDATA)
      const title = item.title || "Untitled Project";

      return {
        id: item.guid || item.link,
        title: title,
        link: item.link,
        description: description,
        imageUrl: imageUrl,
        pubDate: item.pubDate,
        tags: [], // RSS feed doesn't always provide tags easily, leaving empty for now
      };
    });
  } catch (error) {
    console.error("Error fetching Behance projects:", error);
    return [];
  }
}
