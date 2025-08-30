"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/ui/logo";

import {
  Home,
  ListChecks,
  Upload,
  BadgePercent,
  Layers,
  Target,
  Settings,
  MessageSquareQuoteIcon as MessageSquareQuestion,
  LogOut,
} from "lucide-react"

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: ListChecks, label: "Stages & Checklist", href: "#" },
  { icon: Upload, label: "Upload Docs", href: "#" },
  { icon: BadgePercent, label: "Preferred Vendors", href: "#" },
  { icon: Layers, label: "Tech Stack", href: "#" },
  { icon: Target, label: "Targets", href: "#" },
  { icon: Target, label: "Core Sales Targets", href: "#" },
  { icon: Settings, label: "MAI Settings", href: "#" },
  { icon: MessageSquareQuestion, label: "Pending Questions", href: "#" },
]

export function Sidebar() {
  return (
    <div
      className={cn(
        "flex h-full min-h-dvh w-[260px] flex-col justify-between border-r",
        // Subtle blue→teal gradient to match Figma
        "bg-[linear-gradient(180deg,#0e2a47_0%,#0e2a47_30%,#0f3b53_60%,#0c5a66_100%)] text-white",
      )}
    >
      <div className="p-4">
        <Link href="#" className="block">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-white/10" />
            <span className="text-lg font-semibold">weframetech</span>
          </div>
        </Link>

        <nav className="mt-6 grid gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition",
                "hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
              )}
            >
              <item.icon className="h-4 w-4 opacity-90" aria-hidden="true" />
              <span className="text-pretty">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4">
        <button
          className={cn("flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm", "hover:bg-white/10")}
        >
          <LogOut className="h-4 w-4 opacity-90" aria-hidden="true" />
          Logout
        </button>
      </div>
    </div>
  )
}
