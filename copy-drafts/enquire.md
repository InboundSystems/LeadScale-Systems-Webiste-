# Enquiry — copy draft

Maps to: `app/(systems)/enquire/page.tsx` copy props passed into the existing
`EnquiryForm` component, plus a new visible email line (no phone — email
preferred, per instruction). Field changes are listed at the bottom; actual
wiring happens in step 4/5, not this draft.

---

## Page copy

**Eyebrow:** GET IN TOUCH

**Heading:** Tell Us About Your Business.

**Intro:** Fill this in and we'll get back to you directly — no automated reply, no sales sequence. The optional fields help us answer honestly about whether this is worth doing for you yet; skip anything you'd rather not say.

**Message field label:** What's Going On?

**Message field placeholder:** Tell us a bit about your client list and what's prompting you to look into this.

**Submit button:** SEND

**Success message:** Got it. We'll read this ourselves and reply directly — that might take a day or two, since it's genuinely the two of us.

**Reassurance line (beneath form):** No pricing until we've actually talked — the offer's new enough that we'd rather have the conversation first.

---

## Visible email contact (alongside the form, not a phone number)

**Line:** Prefer email? Reach us directly at **admin@leadscalesystems.net** — that's the fastest way to hear back.

---

## Field changes (for step 4/5 implementation)

Replace the current trade-era `extraFields`:

- ~~Trade / Business Type~~
- ~~Team Size, Roughly~~
- ~~Job-Management Software You Currently Use (Simpro, ServiceTitan, AroFlo, Tradify, ServiceM8, Fergus)~~

With:

- **Business type** — label: "What Kind of Business Are You?" — placeholder: "e.g. hair salon, day spa, barbershop, dog grooming"
- **Staff count** — label: "How Many Staff, Roughly?"
- **Booking system** — label: "Which Booking System Do You Use?" — placeholder: "e.g. Fresha, Timely, Phorest, Kitomba, Square Appointments"

All three optional, same as the current fields — the form shouldn't feel like a qualifying gate.
