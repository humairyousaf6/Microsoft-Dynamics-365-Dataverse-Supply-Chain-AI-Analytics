import { DemoAnalyticsWorkspace } from '@/components/dashboard/demo-analytics-workspace'
import { StatusCard } from '@/components/dashboard/status-card'
import { Navbar } from '@/components/layout/navbar'
import type { ConnectionSummary } from '@/types'

const demoConnection: ConnectionSummary = {
  connected: true,
  tableCount: 14,
  rawTableCount: 412,
  selectorMode: 'tds_dynamic'
}

export default function PortfolioPreviewPage() {
  return (
    <main className="min-h-screen">
      <Navbar connection={demoConnection} />
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10">
        <div className="rounded-[18px] border-[1.5px] border-[#f4b06e] bg-[#fff3e4] px-5 py-4 text-sm leading-6 text-[#7b431b]">
          <strong>Sanitized portfolio preview:</strong> all organizations, records, metrics, and connection details shown here are fictional demo data.
        </div>
        <StatusCard connection={demoConnection} />
        <DemoAnalyticsWorkspace />
      </div>
    </main>
  )
}
