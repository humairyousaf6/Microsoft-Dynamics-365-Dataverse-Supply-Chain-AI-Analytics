import { Download, FileSpreadsheet, MessageSquarePlus, Pencil, Trash2 } from 'lucide-react'

const conversations = [
  { title: 'Top selling categories', preview: 'Rank categories and suppliers', date: 'Jul 3', active: true },
  { title: 'Revenue by region', preview: 'Compare regional revenue trends', date: 'Jul 2', active: false },
  { title: 'Supplier performance', preview: 'Review fulfillment indicators', date: 'Jun 30', active: false }
]

const rows = [
  { category: 'Beverages', supplier: 'Demo Supplier D', total: '1,177' },
  { category: 'Pantry', supplier: 'Demo Supplier C', total: '925' },
  { category: 'Snacks', supplier: 'Demo Supplier B', total: '861' }
]

export function DemoAnalyticsWorkspace() {
  return (
    <section className="grid items-start gap-8 xl:grid-cols-[320px_minmax(0,1fr)]">
      <aside className="rounded-[20px] border-[1.5px] border-border bg-white p-4 shadow-soft">
        <button className="inline-flex w-full items-center justify-center gap-2 rounded-[16px] border-[1.5px] border-border bg-surfaceAlt px-4 py-3 text-sm font-black text-text" type="button">
          <MessageSquarePlus className="size-4" />
          New Chat
        </button>
        <p className="mt-5 text-xs font-black uppercase tracking-[0.24em] text-accent">Saved conversations</p>
        <p className="mt-1 text-xs leading-5 text-textMuted">Fictional conversation history for UI demonstration.</p>
        <div className="mt-4 space-y-3">
          {conversations.map((conversation) => (
            <article
              className={conversation.active ? 'rounded-[18px] border-[1.5px] border-[#1a1a2e] bg-[#1a1a2e] p-3 text-white' : 'rounded-[18px] border-[1.5px] border-border bg-surfaceAlt p-3 text-text'}
              key={conversation.title}
            >
              <div className="flex items-start gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-black">{conversation.title}</p>
                    <span className="text-[10px] font-bold opacity-75">{conversation.date}</span>
                  </div>
                  <p className="mt-2 text-xs leading-5 opacity-75">{conversation.preview}</p>
                </div>
                <div className="flex gap-2">
                  <span className="inline-flex size-8 items-center justify-center rounded-full border border-current/20"><Pencil className="size-3.5" /></span>
                  <span className="inline-flex size-8 items-center justify-center rounded-full border border-current/20"><Trash2 className="size-3.5" /></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </aside>

      <div className="min-w-0 rounded-[20px] border-[1.5px] border-border bg-white p-6 shadow-soft">
        <div className="ml-auto max-w-2xl rounded-[22px] rounded-br-md border-[1.5px] border-[#1a1a2e] bg-[#1a1a2e] px-5 py-4 text-sm font-black leading-6 text-white">
          Which suppliers provide the top three best-selling categories?
        </div>

        <div className="mt-5 rounded-[20px] border-[1.5px] border-border bg-white p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-accent">Dataset</p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-text">top_3_best_selling_categories</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full border-[1.5px] border-border bg-surfaceAlt px-3 py-2 text-xs font-bold text-textMuted">3 rows</span>
              <span className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-border bg-white px-3 py-2 text-xs font-bold text-text"><Download className="size-3.5" /> CSV</span>
              <span className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-border bg-[#1a1a2e] px-3 py-2 text-xs font-bold text-white"><FileSpreadsheet className="size-3.5" /> Excel</span>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-[16px] border-[1.5px] border-border">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-surfaceAlt text-xs font-black uppercase tracking-[0.1em] text-textMuted">
                <tr><th className="px-5 py-4">Category</th><th className="px-5 py-4">Supplier</th><th className="px-5 py-4">Total sold</th></tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr className="border-t border-border/40" key={`${row.category}-${row.supplier}`}>
                    <td className="px-5 py-4 font-bold text-text">{row.category}</td>
                    <td className="px-5 py-4 text-textMuted">{row.supplier}</td>
                    <td className="px-5 py-4 font-black text-text">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-5 rounded-[16px] border-[1.5px] border-dashed border-border bg-surfaceAlt px-5 py-4 text-sm text-textMuted">
          Ask a KPI, ranking, trend, supplier-performance, inventory, or diagnostic question…
        </div>
      </div>
    </section>
  )
}
