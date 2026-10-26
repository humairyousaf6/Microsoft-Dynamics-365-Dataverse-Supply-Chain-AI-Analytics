export interface ConnectionSummary {
  connected: boolean
  tableCount: number
  rawTableCount: number
  selectorMode: 'tds_dynamic' | null
}
