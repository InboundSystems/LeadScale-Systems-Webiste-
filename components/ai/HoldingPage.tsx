import Link from 'next/link'

export default function HoldingPage() {
  return (
    <div className="pt-28 min-h-screen bg-[#05050f] relative overflow-hidden flex items-center">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[var(--accent-1)]/[0.09] rounded-full blur-[120px] pointer-events-none" />

      <section className="py-20 px-6 relative w-full">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[var(--accent-1)] text-xs font-semibold tracking-[0.25em] mb-6">LEADSCALE AI SYSTEMS</p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            The Next Division Is
            <br />
            <span className="bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
              Launching Soon.
            </span>
          </h1>

          <p className="text-[#6b7a99] text-lg leading-relaxed mb-12 max-w-lg mx-auto">
            LeadScale AI Systems is the second division of LeadScale Systems. We&apos;re still building it — leave
            your email and we&apos;ll reach out when there&apos;s something to show you.
          </p>

          <div className="bg-white/[0.025] backdrop-blur-xl border border-white/[0.07] rounded-2xl p-12 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent-1)]/30 to-[var(--accent-2)]/20 border border-[var(--accent-1)]/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-[var(--accent-1)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <p className="text-[#6b7a99] text-sm mb-8">Register your interest and we&apos;ll be in touch.</p>
            <a
              href="mailto:admin@leadscalesystems.net?subject=AI Systems — early interest"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-1-hover)] hover:from-[var(--accent-1-hover)] hover:to-[var(--accent-2-hover)] text-white font-bold tracking-wider text-sm px-10 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgb(var(--accent-1-rgb)/0.4)] hover:shadow-[0_0_50px_rgb(var(--accent-1-rgb)/0.6)] hover:scale-[1.04]"
            >
              EMAIL US YOUR INTEREST
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <p className="text-[#374151] text-xs mt-5">admin@leadscalesystems.net</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-semibold tracking-widest">
            <Link href="/" className="text-[#4a5568] hover:text-white transition-colors duration-200">
              ← BACK TO LEADSCALE SYSTEMS
            </Link>
            <span className="hidden sm:inline text-[#2e3650]">/</span>
            <Link href="/media" className="text-[#4a5568] hover:text-white transition-colors duration-200">
              LOOKING FOR LEADSCALE MEDIA SYSTEMS? →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
