import type { Metadata } from 'next'
import SocialMediaPage from '@/components/service-pages/SocialMediaPage'

export const metadata: Metadata = {
  title: 'Social Media Management',
  description:
    'Our Social Media Presence & Maintenance System ensures your business maintains a professional and active presence across key social platforms.',
  alternates: { canonical: '/media/social-media' },
}

export default function SocialMedia() {
  return <SocialMediaPage />
}
