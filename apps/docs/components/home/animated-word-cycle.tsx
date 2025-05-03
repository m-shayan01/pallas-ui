'use client'

import { useGSAP } from '@gsap/react'
import { css } from '@styled-system/css'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import { useRef, useState } from 'react'

gsap.registerPlugin(SplitText)

const WORDS = ['Modern', 'Extendable', 'Themeable', 'TypeSafe']
const ANIMATION_DURATION = 1 // seconds for each word's animation
const DELAY = 2 // seconds between word changes

export default function AnimatedWordCycle() {
  const elRef = useRef<HTMLSpanElement>(null)
  const split = useRef<SplitText | null>(null)
  const [wordIndex, setWordIndex] = useState(0)

  // Helper to get a random uppercase letter
  function randomChar() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return chars[Math.floor(Math.random() * chars.length)]
  }

  useGSAP(
    () => {
      const word = WORDS[wordIndex] || ''
      if (!elRef.current) return
      elRef.current.textContent = word
      split.current = new SplitText(elRef.current, { type: 'chars', charsClass: 'cycle-char' })
      gsap.fromTo(
        split.current.chars,
        { textContent: () => randomChar(), opacity: 0.5 },
        {
          textContent: (i: number) => String(word[i] ?? ''),
          opacity: 1,
          duration: ANIMATION_DURATION,
          stagger: {
            each: 0.15,
            from: 'start',
          },
          ease: 'power2.out',

          onUpdate: () => {
            if (!split.current) return
            split.current.chars.forEach((charEl: Element, i: number) => {
              if (charEl.textContent !== String(word[i] ?? '')) {
                charEl.textContent = randomChar() ?? ''
              }
            })
          },
          onComplete: () => {
            if (!split.current) return
            split.current.chars.forEach((charEl: Element, i: number) => {
              charEl.textContent = String(word[i] ?? '')
            })
          },
        },
      )
      return () => {
        if (split.current) split.current.revert()
        if (elRef.current) elRef.current.textContent = ''
      }
    },
    { dependencies: [wordIndex] },
  )

  // Cycle words every DELAY seconds
  useGSAP(
    () => {
      const timeout = setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % WORDS.length)
      }, DELAY * 2000)
      return () => clearTimeout(timeout)
    },
    { dependencies: [wordIndex] },
  )

  return (
    <span
      ref={elRef}
      className={css({
        display: 'inline-block',
        minWidth: 110,
        textAlign: 'left',
        '& .cycle-char': {
          background: 'linear-gradient(180deg,#ffffff1a,#fff0 41.43%),#272727',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      })}
    />
  )
}
