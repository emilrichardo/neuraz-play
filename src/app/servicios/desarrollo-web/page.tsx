import { getBehanceProjects } from "@/lib/behance"
import { WebDevContent } from "@/components/sections/WebDevContent"

export default async function WebDevPage() {
  const projects = await getBehanceProjects()
  const latestProjects = projects.slice(0, 3)

  return <WebDevContent latestProjects={latestProjects} />
}
