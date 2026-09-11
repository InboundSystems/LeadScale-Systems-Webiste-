import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { systems } from '@/content/systems'
import SystemPage from '@/components/systems/SystemPage'

export function generateStaticParams() {
  return systems
    .filter((system) => system.slug)
    .map((system) => ({ slug: system.slug as string }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const system = systems.find((s) => s.slug === params.slug)
  if (!system) return {}

  return {
    title: system.name,
    description: system.shortDescription,
    alternates: { canonical: `/systems/${system.slug}` },
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const system = systems.find((s) => s.slug === params.slug)
  if (!system) notFound()

  return <SystemPage system={system} />
}
