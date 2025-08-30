import * as React from "react"
import { cn } from "@/lib/utils"

export type BadgeVariant = "default" | "secondary" | "destructive" | "outline" | "success" | "blue"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const base = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium"
    const variants: Record<BadgeVariant, string> = {
      default: "bg-primary text-primary-foreground border-transparent",
      secondary: "bg-muted text-muted-foreground border-transparent",
      destructive: "bg-red-600 text-white border-transparent",
      outline: "text-foreground border-border",
      success: "bg-emerald-600 text-white border-transparent",
      blue: "bg-blue-600 text-white border-transparent",
    }

    return <span ref={ref} className={cn(base, variants[variant], className)} {...props} />
  },
)
Badge.displayName = "Badge"

export default Badge
