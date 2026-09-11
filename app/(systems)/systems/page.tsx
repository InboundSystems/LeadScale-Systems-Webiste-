import type { Metadata } from 'next'
import SystemsIndex from '@/components/systems/SystemsIndex'

export const metadata: Metadata = {
  title: 'Systems',
  description: 'The systems Vicaria builds and operates.',
  alternates: { canonical: '/systems' },
}

export default function SystemsIndexPage() {
  return <SystemsIndex />
}
