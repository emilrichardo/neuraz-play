import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-neon-green text-black hover:bg-neon-green/90 shadow-[0_0_20px_rgba(0,255,157,0.4)] hover:shadow-[0_0_30px_rgba(0,255,157,0.6)]",
        outline: "border-2 border-neon-green text-neon-green hover:bg-neon-green/10 shadow-[0_0_10px_rgba(0,255,157,0.2)]",
        secondary: "bg-neon-violet text-white hover:bg-neon-violet/90 shadow-[0_0_20px_rgba(176,38,255,0.4)]",
        ghost: "hover:bg-white/10 hover:text-white",
        link: "text-neon-cyan underline-offset-4 hover:underline",
        cyber: "relative overflow-hidden border border-neon-cyan text-neon-cyan hover:text-black hover:bg-neon-cyan transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-x-[-100%] before:bg-neon-cyan before:transition-transform before:duration-300 hover:before:translate-x-0 [clip-path:polygon(0_0,100%_0,100%_70%,90%_100%,0_100%)] rounded-none px-6",
      },
      size: {
        default: "h-12 px-6 py-2",
        sm: "h-10 rounded-md px-4",
        lg: "h-14 rounded-md px-10 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
