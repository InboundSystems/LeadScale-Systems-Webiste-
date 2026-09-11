import type { Metadata } from 'next'
import DataHandlingContent from '@/components/systems/DataHandlingContent'

export const metadata: Metadata = {
  title: 'Data Handling',
  description: 'How client data is accessed, used, stored and deleted.',
  alternates: { canonical: '/data-handling' },
}

export default function DataHandlingPage() {
  return <DataHandlingContent />
}
