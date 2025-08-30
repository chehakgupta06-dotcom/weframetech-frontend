"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ProgressCard() {
  const percent = 85
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium">Account Progress</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-6">
        <div className="relative grid place-items-center" aria-labelledby="account-progress-label">
          <span id="account-progress-label" className="sr-only">
            Account progress {percent} percent
          </span>
          <div
            role="img"
            aria-hidden="true"
            className="h-28 w-28 rounded-full"
            style={{
              background: `conic-gradient(hsl(204 88% 45%) ${percent * 3.6}deg, hsl(0 0% 92%) ${percent * 3.6}deg)`,
            }}
          />
          {/* Inner mask to create the ring */}
          <div className="absolute h-20 w-20 rounded-full bg-white" aria-hidden="true" />
          <div className="absolute text-center">
            <div className="text-xl font-semibold">{percent}%</div>
          </div>
        </div>

        <div className="grid gap-3 text-sm">
          <div>
            <div className="mb-1 font-medium">Steps Completed</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Profile Setup</li>
              <li>• Initial Training</li>
              <li>• Legal Documents</li>
            </ul>
          </div>
          <div>
            <div className="mb-1 font-medium">Steps Remaining</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Financial Integration</li>
              <li>• Final Review</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
