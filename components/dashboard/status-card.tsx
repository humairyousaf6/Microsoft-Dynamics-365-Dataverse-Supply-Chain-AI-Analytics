import { AlertTriangle, CheckCircle2, Database, ShieldCheck } from 'lucide-react'

import type { ConnectionSummary } from '@/types'

export function StatusCard({ connection }: { connection: ConnectionSummary }) {
  const checks = [
    {
      label: 'Environment',
      value: 'Demo configured',
      tone: 'ok'
    },
    {
      label: 'Connection',
      value: connection.connected ? 'Live Dataverse' : 'Disconnected',
      tone: connection.connected ? 'ok' : 'warn'
    },
    {
      label: 'Selector',
      value: connection.connected ? 'Business tables ready' : 'Awaiting validation',
      tone: connection.connected ? 'ok' : 'warn'
    }
  ] as const

  return (
    <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-[20px] border-[1.5px] border-border bg-[#161616] p-6 text-white shadow-soft">
        <p className="mb-2 text-xs font-black uppercase tracking-[0.28em] text-accent">Current Status</p>
        <h2 className="text-3xl font-black tracking-[-0.03em] text-white">
          {connection.connected ? 'Connected and ready for Phase 2' : 'Awaiting Dataverse connection'}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-white/70">
          Phase 1 establishes the secure connection, validates the TDS endpoint, discovers the raw schema, and
          auto-selects the active business tables using a TDS-only selector.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-[18px] border-[1.5px] border-white bg-white p-4 text-text">
            <div className="mb-3 inline-flex size-10 items-center justify-center rounded-[12px] bg-accent/14">
              <Database className="size-5 text-accent" />
            </div>
            <p className="text-sm text-textMuted">Connected Tables</p>
            <p className="mt-1 text-5xl font-black tracking-[-0.05em] text-text">{connection.tableCount}</p>
            <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-accent">Raw {connection.rawTableCount}</p>
          </div>
          <div className="rounded-[18px] border-[1.5px] border-border bg-gradient-to-br from-accent to-[#ff9c53] p-4 text-white">
            <div className="mb-3 inline-flex size-10 items-center justify-center rounded-[12px] bg-white/18">
              <ShieldCheck className="size-5 text-white" />
            </div>
            <p className="text-sm text-white/74">Auth Model</p>
            <p className="mt-1 text-base font-black tracking-[-0.02em] text-white">Server-side Azure AD</p>
          </div>
          <div className="rounded-[18px] border-[1.5px] border-border bg-gradient-to-br from-[#3247b8] to-accentAlt p-4 text-white">
            <div className="mb-3 inline-flex size-10 items-center justify-center rounded-[12px] bg-white/24">
              {connection.connected ? (
                <CheckCircle2 className="size-5 text-white" />
              ) : (
                <AlertTriangle className="size-5 text-white" />
              )}
            </div>
            <p className="text-sm text-white/74">Backend Gate</p>
            <p className="mt-1 text-base font-black tracking-[-0.02em] text-white">
              {connection.connected ? 'TDS selector cached' : 'Not validated'}
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-[20px] border-[1.5px] border-border bg-white p-6 shadow-soft">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-accent">Environment Health</p>
        <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-text">System checks at a glance</h3>
        <div className="mt-4 rounded-[18px] border-[1.5px] border-border bg-surfaceAlt p-4">
          <p className="text-sm font-black text-text">
            Sanitized portfolio environment is ready.
          </p>
          <p className="mt-2 text-sm text-textMuted">
            Production credentials, tenant identifiers, endpoints, and customer records are intentionally omitted.
          </p>
        </div>
        <div className="mt-4 grid gap-3">
          {checks.map((check) => (
            <div
              className="flex items-center justify-between rounded-[16px] border-[1.5px] border-border bg-gradient-to-r from-white to-surfaceAlt px-4 py-3"
              key={check.label}
            >
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-accent">{check.label}</p>
                <p className="mt-1 text-sm font-bold text-text">{check.value}</p>
              </div>
              <span
                className={
                  check.tone === 'ok'
                    ? 'inline-flex size-3 rounded-full bg-emerald-500'
                    : 'inline-flex size-3 rounded-full bg-accent'
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
