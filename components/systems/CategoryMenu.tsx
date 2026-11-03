'use client'

import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import type { CategoryDef } from '@/content/types'
import CategoryChip from './CategoryChip'

// A row's category chip as a button that opens a small menu of the
// practice's categories, so a visitor can recategorise a row the way
// reception would. Click or Enter/Space opens it; Up/Down/Home/End move;
// Enter/Space chooses; Escape (or Tab, or a click outside) closes and
// returns focus to the chip. A listbox of options, aria-selected on the
// current one.
export default function CategoryMenu({
  current,
  categories,
  label,
  disabled,
  onChoose,
  onHover,
}: {
  current: CategoryDef
  categories: CategoryDef[]
  /** e.g. "Change category, Kestrel Office Supplies". */
  label: string
  disabled: boolean
  onChoose: (category: CategoryDef) => void
  onHover?: (label: string | null) => void
}) {
  const [open, setOpen] = useState(false)
  const [up, setUp] = useState(false)
  const [active, setActive] = useState(0)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const id = useId()

  const close = (focus = true) => {
    setOpen(false)
    if (focus) buttonRef.current?.focus()
  }

  function toggle() {
    if (open) return close()
    // Open upwards when there is not room below inside the window.
    const win = buttonRef.current?.closest('.inbox-window')?.getBoundingClientRect()
    const r = buttonRef.current?.getBoundingClientRect()
    setUp(!!win && !!r && r.bottom + 32 * categories.length + 16 > win.bottom)
    setActive(Math.max(0, categories.findIndex((c) => c.label === current.label)))
    setOpen(true)
  }

  useEffect(() => {
    if (!open) return
    listRef.current?.querySelectorAll<HTMLElement>('[role="option"]')[active]?.focus()
  }, [open, active])

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node
      if (!listRef.current?.contains(t) && !buttonRef.current?.contains(t)) close(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  function onKey(e: KeyboardEvent) {
    const last = categories.length - 1
    if (e.key === 'ArrowDown') setActive((a) => (a >= last ? 0 : a + 1))
    else if (e.key === 'ArrowUp') setActive((a) => (a <= 0 ? last : a - 1))
    else if (e.key === 'Home') setActive(0)
    else if (e.key === 'End') setActive(last)
    else if (e.key === 'Escape') close()
    else if (e.key === 'Tab') return close(false)
    else if (e.key === 'Enter' || e.key === ' ') {
      onChoose(categories[active])
      close()
    } else return
    e.preventDefault()
  }

  return (
    <span className="relative inline-flex">
      <button
        ref={buttonRef}
        type="button"
        disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        aria-label={`${current.label}. ${label}`}
        onClick={toggle}
        className="rounded-[3px] disabled:cursor-default"
      >
        <CategoryChip category={current} onHover={onHover} />
      </button>
      {open && (
        <ul
          ref={listRef}
          id={id}
          role="listbox"
          aria-label={label}
          onKeyDown={onKey}
          className={`absolute right-0 z-20 min-w-[12.5rem] rounded-[6px] border border-[var(--frame)] bg-[var(--surface)] p-1 shadow-[0_8px_24px_rgba(22,35,43,0.14)] ${
            up ? 'bottom-full mb-1' : 'top-full mt-1'
          }`}
        >
          {categories.map((c, i) => (
            <li
              key={c.label}
              role="option"
              tabIndex={-1}
              aria-selected={c.label === current.label}
              onClick={() => {
                onChoose(c)
                close()
              }}
              onMouseEnter={() => setActive(i)}
              className={`flex cursor-pointer items-center justify-between gap-3 rounded-[4px] px-2 py-1.5 outline-none ${
                i === active ? 'bg-[var(--row-selected)] ring-1 ring-inset ring-[var(--accent)]' : ''
              }`}
            >
              <CategoryChip category={c} />
              {c.label === current.label && (
                <span aria-hidden="true" className="text-[0.75rem] text-[var(--muted)]">
                  ✓
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </span>
  )
}
