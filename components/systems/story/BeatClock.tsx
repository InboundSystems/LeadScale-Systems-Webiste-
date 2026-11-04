// The left column of a story beat: the day, then a large clock in light
// blue, then the beat's short heading. Vertically centred in its beat, so it
// sits level with the pinned artifact while that beat is shown.
export default function BeatClock({ day, time, heading }: { day?: string; time: string; heading: string }) {
  return (
    <div>
      {day && <p className="v-eyebrow !mb-3 !text-[#93C5FD]">{day}</p>}
      <p className="v-clock">{time}</p>
      <p className="mt-4 max-w-[16ch] text-[1.5rem] font-semibold leading-tight text-white">{heading}</p>
    </div>
  )
}
