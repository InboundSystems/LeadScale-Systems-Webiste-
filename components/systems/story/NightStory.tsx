'use client'

import type { CSSProperties, ReactNode } from 'react'
import { motion, useReducedMotion, useSpring, useTransform, type MotionValue } from 'framer-motion'
import type { HeroList, HomeContent, NightStoryContent } from '@/content/types'
import VicariaOwl from '@/components/brand/VicariaOwl'
import EyeDot from '../EyeDot'
import StarField from '../StarField'
import Tilt from '../Tilt'
import { Readout, formatClock } from './clock'
import Story, { Fit, type StageMode } from './Story'

// The homepage's first story, "One night" (night story, 9 November 2026).
// It opens as the hero: the H1, the subhead and both buttons beside the
// Monday notepad. Scrolling on, the notepad stays pinned while the business
// closes and the night passes: the owl's eye on the notepad opens, the
// characteristics of the work attach to the two correspondence items, those
// two are crossed off overnight, the judgement calls wait, and at 7:00 am the
// notepad reads "Two done. Three waiting for you." Then the pull line.
//
// The sky behind deepens from ink to the night blue, the stars brighten and
// drift a few pixels, and a faint blue horizon line shows at the end (night
// stays the focus: no dawn). Transform and opacity only.
//
// Company level: a fictional business (no sector, no name), and only the
// two correspondence items are ever crossed off. Copy: content/audience.ts.

function NightSky({ progress }: { progress: MotionValue<number> }) {
  const reduced = useReducedMotion()
  const deepen = useTransform(progress, [0, 1], [0, 1])
  const starsOpacity = useTransform(progress, [0, 1], [0.55, 1])
  const drift = useSpring(useTransform(progress, [0, 1], [0, -14]), { stiffness: 60, damping: 20 })
  const horizon = useTransform(progress, [0.86, 1], [0, 1])
  return (
    <>
      <div className="absolute inset-0 bg-[var(--dark)]" />
      <motion.div className="absolute inset-0 bg-[var(--night)]" style={{ opacity: reduced ? 0.6 : deepen }} />
      <motion.div className="absolute inset-0" style={reduced ? undefined : { opacity: starsOpacity, y: drift }}>
        <StarField count={90} maxOpacity={0.5} />
      </motion.div>
      <VicariaOwl className="absolute -right-[30%] top-[55%] h-[95%] w-auto -translate-y-1/2 text-white opacity-[0.03] lg:-right-[6%]" />
      <motion.div className="absolute inset-x-0 bottom-0 h-40" style={{ opacity: reduced ? 0 : horizon }}>
        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(37_99_235/0.16)] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent" />
      </motion.div>
    </>
  )
}

function Box({ ticked }: { ticked: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`relative mt-[0.2em] flex h-[1.05rem] w-[1.05rem] shrink-0 items-center justify-center rounded-[4px] border transition-[background-color,border-color] duration-500 ease-out ${
        ticked ? 'border-[var(--note)] bg-[var(--note)]' : 'border-[var(--frame-strong)] bg-[var(--surface)]'
      }`}
    >
      <svg viewBox="0 0 16 16" className={`h-3 w-3 transition-opacity duration-300 ${ticked ? 'opacity-100' : 'opacity-0'}`}>
        <path d="M3.5 8.5 L6.5 11.5 L12.5 4.5" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

/** An annotation outside the notepad, joined to its item by a thin light-blue
 *  leader line. Live desktop stage only (app/globals.css, "Stage callouts"). */
function Callout({ show, children, line = true, at = 'right-[calc(100%-0.25rem)]' }: { show: boolean; children?: ReactNode; line?: boolean; at?: string }) {
  return (
    <span
      className={`stage-callout stage-fade pointer-events-none absolute ${at} top-1/2 w-[15.5rem] -translate-y-1/2 items-center justify-end gap-2 xl:w-[18rem] ${
        show ? '' : 'stage-off translate-x-2'
      }`}
    >
      {children && <span className="flex max-w-[11.5rem] flex-col items-end gap-1 text-right xl:max-w-[13.5rem]">{children}</span>}
      {line && (
        <span className="relative h-px min-w-[2.5rem] flex-1 bg-[#93C5FD]/70">
          <span className="absolute -right-0.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#93C5FD]" />
        </span>
      )}
    </span>
  )
}

function Words({ children }: { children: ReactNode }) {
  return <span className="text-[0.875rem] font-medium leading-snug text-[#BFDBFE]">{children}</span>
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="whitespace-nowrap rounded-[4px] border border-[#93C5FD]/50 bg-[rgb(147_197_253/0.08)] px-1.5 py-[3px] text-[0.75rem] font-medium leading-none text-[#DBEAFE]">
      {children}
    </span>
  )
}

export function Notepad({
  list,
  night,
  beat,
  mode,
  progress,
}: {
  list: HeroList
  night: NightStoryContent
  beat: number
  mode: StageMode
  progress?: MotionValue<number>
}) {
  const shown = night.beats.slice(0, beat + 1)
  const active = beat >= 0 ? night.beats[beat] : undefined
  const crossed = new Set(shown.flatMap((b) => b.crosses ?? []))
  const waits = shown.some((b) => b.waits)
  const morning = shown.some((b) => b.morning)
  const open = beat >= 0
  const workShown = shown.some((b) => b.showsWork)
  const doneItems = list.items.map((it, i) => (it.done ? i : -1)).filter((i) => i >= 0)
  const allDone = doneItems.every((i) => crossed.has(i))
  const live = mode === 'live'

  // The in-card notes (left out on the live desktop stage, where the
  // callouts carry the words).
  const runs: { done: boolean; idx: number[] }[] = []
  list.items.forEach((item, i) => {
    const last = runs[runs.length - 1]
    if (last && last.done === item.done) last.idx.push(i)
    else runs.push({ done: item.done, idx: [i] })
  })

  return (
    <figure className={`mx-auto w-full ${mode === 'snap' ? 'max-w-[24rem]' : 'max-w-[24rem] xl:max-w-[26rem]'} lg:mr-0`}>
      <Tilt>
        <div className="lit lit-screen relative rounded-[10px] border border-[var(--frame)] bg-[var(--surface)] px-5 pb-5 pt-6 text-[var(--ink)] sm:px-7 sm:pb-6 sm:pt-7">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] rounded-t-[10px] bg-gradient-to-r from-[var(--primary)] to-[#60A5FA]" />
          <div className="relative flex items-start justify-between gap-4 border-b border-[var(--hairline)] pb-3">
            <div>
              <p className="text-[1.5rem] font-semibold leading-none tracking-[-0.02em]">{list.title}</p>
              <p className="mt-2 text-[0.75rem] text-[var(--muted)]">
                <Readout
                  progress={live ? progress : undefined}
                  start={night.clock.start}
                  minutes={night.beats.map((b) => b.minute)}
                  days={night.clock.days}
                  step={5}
                  beat={beat}
                />
              </p>
            </div>
            <p className="flex shrink-0 items-center gap-2.5 pt-1 text-[0.75rem] font-medium text-[var(--muted)]">
              <EyeDot watch open={open} colour="#3B82F6" size={12} delay={150} />
              <span className="grid justify-items-start">
                <span className={`stage-fade [grid-area:1/1] ${open ? 'stage-off' : ''}`}>{night.watch.off}</span>
                <span className={`stage-fade whitespace-nowrap text-[var(--note)] [grid-area:1/1] ${open ? '' : 'stage-off'}`}>{night.watch.on}</span>
              </span>
            </p>
            {live && (
              <Callout show={active?.target === 'title'}>
                <Words>{active?.target === 'title' ? active.text : null}</Words>
              </Callout>
            )}
          </div>

          <div className="mt-1 flex flex-col">
            {runs.map((run) => (
              <div key={run.idx[0]} className="relative flex flex-col gap-x-4 border-b border-[var(--hairline)] py-3 last:border-b-0 sm:flex-row sm:items-stretch">
                {live && (() => {
                  // A bracket over the group, and its annotation: the four
                  // characteristics on the correspondence items, "needs a
                  // person" on the rest, then the judgement beat's words.
                  const show = !!active?.showsWork || (active?.target === 'person' && !run.done)
                  return (
                    <>
                      <span
                        className={`stage-callout stage-fade pointer-events-none absolute inset-y-3 right-[calc(100%+0.15rem)] w-2 border-y border-l border-[#93C5FD]/70 ${show ? '' : 'stage-off'}`}
                      />
                      <Callout show={show} at="right-[calc(100%+0.65rem)]">
                        {active?.showsWork && run.done && night.tags.map((t) => <Tag key={t.text}>{t.text}</Tag>)}
                        {active?.showsWork && !run.done && <Tag>{night.personTag}</Tag>}
                        {active?.target === 'person' && !run.done && <Words>{active.text}</Words>}
                      </Callout>
                    </>
                  )
                })()}
                <ul className="flex min-w-0 flex-1 flex-col gap-2.5">
                  {run.idx.map((i) => {
                    const item = list.items[i]
                    const done = crossed.has(i)
                    const dim = waits && !item.done
                    const isTarget = active?.target === i
                    return (
                      <li key={item.text} className={`relative flex gap-3 text-[1rem] leading-snug transition-opacity duration-700 ${dim ? 'opacity-[0.55]' : ''}`}>
                        <Box ticked={done} />
                        <span className="strike-live" data-done={done}>
                          {item.text}
                        </span>
                        {live && (
                          <Callout show={isTarget}>
                            <Words>{isTarget ? active!.text : null}</Words>
                          </Callout>
                        )}
                      </li>
                    )
                  })}
                </ul>
                <div className="notepad-sidenote mt-2 flex items-center gap-2.5 sm:mt-0 sm:w-[7.5rem] sm:shrink-0">
                  <span
                    aria-hidden="true"
                    className={`stage-fade hidden w-2.5 shrink-0 self-stretch border-y border-r border-[var(--note)] sm:block ${
                      (run.done ? allDone : workShown) ? '' : 'stage-off'
                    }`}
                  />
                  <p className={`stage-fade text-[0.8125rem] font-medium leading-snug text-[var(--note)] ${(run.done ? allDone : workShown) ? '' : 'stage-off'}`}>
                    {run.done ? list.doneNote : list.personNote}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className={`stage-fade mt-1 border-t border-[var(--hairline)] pt-3 text-[0.875rem] font-semibold text-[var(--note)] ${morning ? '' : 'stage-off'}`}>
            {night.morningLine}
          </p>
        </div>
      </Tilt>
      {mode !== 'snap' && <figcaption className="mt-4 text-[0.875rem] text-[var(--on-dark-muted)]">{list.caption}</figcaption>}
    </figure>
  )
}

export default function NightStory({ home, intro }: { home: HomeContent; intro: ReactNode }) {
  const { night, hero, work } = home
  const timeLabel = (b: NightStoryContent['beats'][number]) => b.label ?? formatClock(b.minute, night.clock.days, false)
  return (
    <Story
      label={night.heading}
      className="on-dark text-white"
      style={{ '--story-top': '4rem', '--story-stage-bg': 'rgb(7 11 28 / 0.9)' } as CSSProperties}
      backdrop={(p) => <NightSky progress={p} />}
      intro={intro}
      stage={(beat, mode, progress) =>
        mode === 'live' ? (
          <Fit className="h-full w-full py-3 lg:py-10">
            <Notepad list={hero.list} night={night} beat={beat} mode={mode} progress={progress} />
          </Fit>
        ) : (
          <Notepad list={hero.list} night={night} beat={beat} mode={mode} />
        )
      }
      beats={night.beats.map((b, i) => ({
        key: b.key,
        id: b.id,
        content: (
          <>
            {i === 0 && <h2 className="v-h2 mb-8 max-w-[18ch] !text-white">{night.heading}</h2>}
            <p className="text-[1.5rem] font-semibold leading-none tabular-nums text-[#93C5FD]">{timeLabel(b)}</p>
            {b.showsWork && (
              <div className="mt-6">
                <h3 className="v-h3 !text-white">{work.heading}</h3>
                <ul className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {work.items.map((item) => (
                    <li key={item.heading}>
                      <p className="font-semibold text-white">{item.heading}</p>
                      <p className="mt-1 text-[0.875rem] text-[var(--on-dark-muted)]">{item.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        ),
        words: <p className="mt-4 max-w-[30ch] text-[1.125rem] leading-snug text-[var(--on-dark-soft)]">{b.text}</p>,
      }))}
      outro={
        <div className="mx-auto w-full max-w-[84rem] px-4 pb-24 pt-8 sm:px-6 sm:pb-32 lg:px-8">
          <p className="v-pull max-w-[20ch] !text-white">{work.closing}</p>
        </div>
      }
    />
  )
}

