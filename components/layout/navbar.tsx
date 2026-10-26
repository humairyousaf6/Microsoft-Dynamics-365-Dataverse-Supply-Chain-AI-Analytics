import { BarChart3, DatabaseZap } from 'lucide-react'

import { cn } from '@/lib/utils'
import type { ConnectionSummary } from '@/types'

export function Navbar({ connection }: { connection: ConnectionSummary }) {
  const connectedSummary = connection.connected ? (
    <>
      <span className="font-semibold text-textMuted">Connected</span>
      <span className="font-black tabular-nums tracking-[-0.01em] text-[#1a1a2e]">
        {connection.tableCount} active / {connection.rawTableCount} raw
      </span>
    </>
  ) : (
    'Not connected'
  )

  return (
    <header className="sticky top-0 z-20 border-b-[1.5px] border-[#26263d] bg-[#1a1a2e] text-white shadow-soft">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-[14px] border-[1.5px] border-white bg-white text-[#1a1a2e]">
            <BarChart3 className="size-5 text-accent" />
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-accent">Data Insight POC</p>
            <h1 className="text-lg font-black tracking-[-0.03em] text-white">Dataverse Analytics Console</h1>
          </div>
        </div>
        <div
          className={cn(
            'inline-flex items-center gap-2 rounded-full border-[1.5px] px-4 py-2 text-sm font-bold',
            connection.connected
              ? 'border-accentAlt bg-white text-[#1a1a2e]'
              : 'border-white bg-transparent text-white/72'
          )}
        >
          <DatabaseZap className={cn('size-4', connection.connected ? 'text-accent' : 'text-white/72')} />
          <span className="flex flex-wrap items-center gap-1.5">{connectedSummary}</span>
        </div>
      </div>
    </header>
  )
}
