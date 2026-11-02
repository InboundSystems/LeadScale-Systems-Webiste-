import type { Metadata } from 'next'
import SystemsIndex from '@/components/systems/SystemsIndex'
import { pageMeta } from '@/content/audience'

export const metadata: Metadata = {
  title: pageMeta.systems.title,
  description: pageMeta.systems.description,
  alternates: { canonical: '/systems' },
}

export default function SystemsIndexPage() {
  return <SystemsIndex />
}
