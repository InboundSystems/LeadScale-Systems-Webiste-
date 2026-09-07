'use client'

import { motion } from 'framer-motion'

// The only proof we have — see docs/POSITIONING.md "The only proof we have."
// A research finding, not a testimonial: no name, no business name, no photo,
// no endorsement of us. Keep the attribution exactly as "Salon owner,
// research response."
export default function Research() {
  return (
    <section className="py-28 px-6 bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-[var(--accent-light)] text-xs font-semibold tracking-[3px] mb-4">THE RESEARCH</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            Twenty Of Fifty-Eight
            <br />
            Described The Same Problem.
          </h2>
          {[
            'Two hundred and four Australian salon and beauty businesses were approached in person, by phone and by message, and asked what work they were still doing after close. Fifty-eight gave a substantive answer.',
            'Twenty of them described the same thing: clients booking by text, DM and phone instead of the booking system, and someone re-entering it by hand at the end of the day. Nothing else came close. The hypothesis held going in — winning back lapsed clients — placed seventh.',
            'System 01 was built for that finding. A second sector is under research now.',
          ].map((paragraph, i, arr) => (
            <p
              key={paragraph}
              className={`text-[#6b7a99] text-base leading-relaxed max-w-2xl ${i < arr.length - 1 ? 'mb-4' : ''}`}
            >
              {paragraph}
            </p>
          ))}
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[var(--card-fill)] border border-[var(--hairline)] rounded-[var(--radius-card)] px-6 py-6 md:px-8 md:py-8"
        >
          <p className="text-[#94a3b8] text-xs font-semibold tracking-[0.2em] mb-4">RESEARCH RESPONSE</p>
          <p className="text-white text-lg leading-relaxed mb-4">
            “Getting people to actually use the booking system rather than clients ringing or texting.”
          </p>
          <cite className="text-[#6b7a99] text-sm not-italic">Salon owner, research response</cite>
        </motion.blockquote>
      </div>
    </section>
  )
}
