import type { Metadata } from 'next'
import DataHandlingContent from '@/components/systems/DataHandlingContent'
import { pageMeta } from '@/content/audience'

export const metadata: Metadata = {
  title: pageMeta.dataHandling.title,
  description: pageMeta.dataHandling.description,
  alternates: { canonical: '/data-handling' },
}

export default function DataHandlingPage() {
  return <DataHandlingContent />
}
