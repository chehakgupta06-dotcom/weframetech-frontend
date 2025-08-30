"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type Props = {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  name?: string
  className?: string
  "aria-label"?: string
}

export function Switch({
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  name,
  className,
  ...rest
}: Props) {
  const [internal, setInternal] = React.useState<boolean>(defaultChecked ?? false)
  const isControlled = typeof checked === "boolean"
  const value = isControlled ? checked : internal

  function toggle() {
    if (disabled) return
    const next = !value
    if (!isControlled) setInternal(next)
    onCheckedChange?.(next)
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={value}
      aria-disabled={disabled}
      name={name}
      onClick={toggle}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        value ? "bg-blue-500" : "bg-gray-300",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...rest}
    >
      <span
        className={cn(
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition-transform duration-200 ease-in-out",
          value ? "translate-x-5" : "translate-x-0"
        )}
      />
      <span className="sr-only">Toggle</span>
    </button>
  )
}
