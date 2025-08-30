// If you have clsx and tailwind-merge installed, use the standard implementation below.
// Otherwise, the simple fallback at the bottom works without extra deps.

// --- Preferred (if deps available) ---
/*
import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
*/

// --- Fallback (no external deps required) ---
type Classish = string | number | false | null | undefined | Record<string, boolean>

export function cn(...inputs: Classish[]): string {
  const parts: string[] = []
  for (const item of inputs) {
    if (!item) continue
    if (typeof item === "string" || typeof item === "number") {
      parts.push(String(item))
    } else if (typeof item === "object") {
      for (const [key, val] of Object.entries(item)) {
        if (val) parts.push(key)
      }
    }
  }
  // naive merge keeps last duplicate classes; good enough for most cases
  return parts.join(" ")
}
