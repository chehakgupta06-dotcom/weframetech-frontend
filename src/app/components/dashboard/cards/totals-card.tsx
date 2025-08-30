"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TotalsCard() {
  const stages = [
    { name: "Stage 1 (Initial Inquiry)", color: "bg-sky-500", count: 2, trend: "+2.1%" },
    { name: "Stage 2 (Document Submission)", color: "bg-teal-500", count: 7, trend: "-1.2%" },
    { name: "Stage 3 (Training)", color: "bg-emerald-500", count: 5, trend: "+5.0%" },
  ]
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Total Franchisees Onboard</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-baseline gap-3">
          <div className="text-3xl font-semibold">14</div>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">+7.4%</span>
        </div>
        <div className="grid gap-2">
          {stages.map((s) => (
            <div key={s.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${s.color}`} />
                <span className="text-muted-foreground">{s.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">{s.count.toString().padStart(2, "0")}</span>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                  {s.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
