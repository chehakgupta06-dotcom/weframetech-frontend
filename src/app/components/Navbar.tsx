"use client";
import { Logo } from "@/components/ui/logo";
export default function Navbar() {
  return (
    <header className="w-full h-14 border-b bg-white flex items-center justify-between px-6 shadow-sm">
      <h1 className="font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        {/* Later: Add user avatar, search, etc. */}
        <span className="text-sm text-gray-500">Welcome, User</span>
      </div>
    </header>
  );
}
