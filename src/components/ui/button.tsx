import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px]
   text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50
   outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
   relative z-[1] overflow-hidden
   bg-white text-black border-2 border-transparent
   before:absolute before:inset-0 before:rounded-[10px]
   before:p-[2px] before:bg-[linear-gradient(90deg,red,orange,yellow,green,blue,indigo,violet)]
   before:z-[-1]
   before:content-[''] before:pointer-events-none
   after:hidden
   hover:text-black
   font-semibold text-[clamp(16px,2vw,24px)]`,
  {
    variants: {
      variant: {
        default: "",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-gray-300 text-black hover:bg-gray-100",
        ghost: "bg-transparent hover:bg-gray-200",
        link: "text-blue-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "",
        sm: "px-3 py-1.5 text-sm",
        lg: "px-8 py-3 text-lg",
        icon: "p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
