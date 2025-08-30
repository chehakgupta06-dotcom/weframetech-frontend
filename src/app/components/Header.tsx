"use client";

import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b shadow-sm flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </button>
        <div className="w-9 h-9 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}
