import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-[#0e6482] text-white shadow-md hover:bg-[#0b4d6b] hover:shadow-lg hover:translate-y-[-1px]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-[#1680ab] text-[#1680ab] bg-background hover:bg-[#1680ab]/5",
        secondary:
          "bg-[#f0f9ff] text-[#0e6482] hover:bg-[#e0f2fe]",
        ghost: "hover:bg-accent hover:text-accent-foreground text-[#0e6482]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "px-4 py-2 text-sm w-full h-9",
        md: "px-6 py-3 text-base h-11",
        lg: "h-11 px-8 text-lg",
        xl: "h-12 px-10 text-lg w-full",
        icon: "h-9 w-9",
      },
      pill: {
        true: "rounded-full",
        false: "",
      },
    },
    compoundVariants: [
      {
        pill: false,
        size: "sm",
        className: "rounded-full",
      },
      {
        pill: false,
        size: "md",
        className: "rounded-lg",
      },
      {
        pill: false,
        size: "lg",
        className: "rounded-xl",
      },
      {
        pill: false,
        size: "xl",
        className: "rounded-xl",
      },
      {
        pill: false,
        size: "default",
        className: "rounded-md",
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      pill: false,
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, pill, isLoading, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot.Root : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, pill, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
