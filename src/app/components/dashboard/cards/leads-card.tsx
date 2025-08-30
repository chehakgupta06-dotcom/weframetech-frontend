"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const leads = [
  { name: "Wade Warren", stage: "Initial Inquiry" },
  { name: "Ava Wright", stage: "Document Submission" },
  { name: "Cody Fisher", stage: "Training" },
]

export function LeadsCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Prospect Leads</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {leads.map((l) => (
          <div key={l.name} className="flex items-center justify-between rounded-md border p-3">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/diverse-avatars.png" alt="" />
                <AvatarFallback>
                  {l.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")
                    .slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-medium">{l.name}</div>
                <div className="text-xs text-muted-foreground">Stage: {l.stage}</div>
              </div>
            </div>
            <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs font-medium text-sky-700">Follow-up</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
