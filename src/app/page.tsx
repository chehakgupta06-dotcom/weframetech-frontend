import { Sidebar } from "@/components/sidebar"
import { Topbar } from "@/components/topbar"
import { ProgressCard } from "@/components/dashboard/cards/progress-card"
import { TotalsCard } from "@/components/dashboard/cards/totals-card"
import { InsightsCard } from "@/components/dashboard/cards/insights-card"
import { FinancialCard } from "@/components/dashboard/cards/financial-card"
import { LeadsCard } from "@/components/dashboard/cards/leads-card"
import { UploadsTable } from "@/components/uploads-table"

export default function Page() {
  return (
    <main className="min-h-dvh w-full bg-muted/20">
      <div className="mx-auto grid min-h-dvh w-full grid-cols-1 md:grid-cols-[260px_1fr]">
        <aside className="hidden md:block">
          <Sidebar />
        </aside>
        <section className="flex min-w-0 flex-col">
          <Topbar title="Dashboard" />
          <div className="mx-auto w-full max-w-[1200px] p-4 md:p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
              <div className="md:col-span-4">
                <ProgressCard />
              </div>
              <div className="md:col-span-4">
                <TotalsCard />
              </div>
              <div className="md:col-span-4">
                <InsightsCard />
              </div>
              <div className="md:col-span-4">
                <FinancialCard />
              </div>
              <div className="md:col-span-8">
                <LeadsCard />
              </div>
              <div className="md:col-span-12">
                <UploadsTable />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
