import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Microsoft Dynamics 365 Supply Chain AI Analytics',
  description: 'Sanitized frontend portfolio preview for a confidential Microsoft Dynamics 365 and Dataverse analytics platform.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
