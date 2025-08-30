"use client"
import { Logo } from "@/components/ui/logo";
import { Bell, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Topbar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-10 w-full border-b bg-background/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-3 md:px-6">
        <h1 className="text-lg font-semibold md:text-xl">{title}</h1>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Notifications" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1 top-1 inline-flex h-2 w-2 rounded-full bg-red-500" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2 bg-transparent">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/diverse-avatars.png" alt="User" />
                  <AvatarFallback>WW</AvatarFallback>
                </Avatar>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
