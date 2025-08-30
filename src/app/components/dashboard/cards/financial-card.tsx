"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FinancialCard() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold text-foreground">Financial Wellbeing</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-md border bg-background p-3">
            <div className="text-xs text-muted-foreground">Total Franchisees</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-2xl font-semibold">20</span>
              <span className="text-xs text-emerald-600">+2.1%</span>
            </div>
          </div>
          <div className="rounded-md border bg-background p-3">
            <div className="text-xs text-muted-foreground">Sales Growth</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-2xl font-semibold">$450k</span>
              <span className="text-xs text-emerald-600">vs last period</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-md border bg-background p-3">
            <div className="text-xs text-muted-foreground">Target</div>
            <div className="mt-1 text-2xl font-semibold">$500,000</div>
          </div>
          <div className="rounded-md border bg-background p-3">
            <div className="text-xs text-muted-foreground">Current</div>
            <div className="mt-1 text-2xl font-semibold">$450,000</div>
          </div>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Progress toward target</span>
            <span className="text-sm font-medium text-foreground">90%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-primary" style={{ width: "90%" }} aria-hidden="true" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default FinancialCard
