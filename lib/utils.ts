import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(value: number | string) {
  if (typeof value === 'string') return value
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(value)
}

export function formatConversationTimestamp(timestamp: number) {
  const value = new Date(timestamp)
  const now = new Date()
  const diffMs = now.getTime() - value.getTime()
  const diffMinutes = Math.floor(diffMs / 60000)

  if (diffMinutes < 1) {
    return 'Just now'
  }

  if (diffMinutes < 60) {
    return `${diffMinutes}m ago`
  }

  const isSameDay = value.toDateString() === now.toDateString()
  if (isSameDay) {
    return value.toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit'
    })
  }

  const yesterday = new Date(now)
  yesterday.setDate(now.getDate() - 1)
  if (value.toDateString() === yesterday.toDateString()) {
    return 'Yesterday'
  }

  return value.toLocaleDateString([], {
    month: 'short',
    day: 'numeric'
  })
}
