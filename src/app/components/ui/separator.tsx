import type * as React from "react"
import { cn } from "@/lib/utils"

export function Separator({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("my-2 h-px w-full bg-border", className)} {...props} />
}
