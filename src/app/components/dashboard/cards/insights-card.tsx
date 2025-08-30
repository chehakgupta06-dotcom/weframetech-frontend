"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function InsightsCard() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Key Insights & Feedback</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between">
          <div className="grid gap-1">
            <div className="text-sm text-muted-foreground">Sales Growth</div>
            <div className="text-2xl font-semibold">10%</div>
          </div>
          <span className="rounded-full bg-sky-50 px-2 py-0.5 text-xs font-medium text-sky-700">Top Performer</span>
        </div>
        <div>
          <div className="mb-1 text-sm font-medium">Feedback</div>
          <p className="text-sm text-muted-foreground">
            7 franchisees are requesting more detailed training materials.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
