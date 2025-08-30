"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Filter, Plus, Search } from "lucide-react"

const rows = [
  {
    name: "Tech requirements.pdf",
    size: "200 KB",
    type: "Legal",
    app: true,
    dashboard: true,
    access: "Full",
  },
  {
    name: "Dashboard screenshot.jpg",
    size: "720 KB",
    type: "Vendors & Assets",
    app: true,
    dashboard: false,
    access: "Onboarding",
  },
  {
    name: "Dashboard prototype recording.mp4",
    size: "16 MB",
    type: "Technology",
    app: false,
    dashboard: true,
    access: "Franchisee",
  },
  {
    name: "Financial Overview",
    size: "4.2 MB",
    type: "Financial",
    app: true,
    dashboard: true,
    access: "Prospect",
  },
]

export function UploadsTable() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">My Uploads</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Filter className="h-4 w-4" /> Filters
            </Button>
            <Button size="sm" className="gap-2">
              <Plus className="h-4 w-4" /> Add file
            </Button>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">Documents that are uploaded by you.</p>
      </CardHeader>
      <CardContent>
        <div className="mb-3 flex items-center gap-2">
          <div className="relative w-full max-w-sm">
            <Search className="pointer-events-none absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search here..." className="pl-8" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document Name</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Document Type</TableHead>
                <TableHead className="text-center">App Inclusion</TableHead>
                <TableHead className="text-center">Dashboard Inclusion</TableHead>
                <TableHead>Stage Access</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((r) => (
                <TableRow key={r.name}>
                  <TableCell className="font-medium">{r.name}</TableCell>
                  <TableCell className="text-muted-foreground">{r.size}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="rounded">
                      {r.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <Switch checked={r.app} aria-label="App inclusion" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Switch checked={r.dashboard} aria-label="Dashboard inclusion" />
                  </TableCell>
                  <TableCell>{r.access}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-sm text-red-600 hover:underline">Delete</button>
                      <button className="text-sm text-sky-700 hover:underline">Edit</button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
