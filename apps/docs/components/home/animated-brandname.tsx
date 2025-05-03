'use client'

import { useGSAP } from '@gsap/react'
import { css } from '@styled-system/css'
import gsap from 'gsap'
import { ScrambleTextPlugin } from 'gsap/all'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP, ScrambleTextPlugin)

const originalText = 'Pallas UI'

export default function AnimatedBrandName() {
  const scrambleRef = useRef<HTMLSpanElement>(null)

  const scramble = (text: string) => {
    if (!scrambleRef.current) return
    gsap.to(scrambleRef.current, {
      duration: 1,
      scrambleText: {
        text,
        chars: '.:',
        speed: 0.5,
      },
      overwrite: true,
    })
  }

  const unscramble = (text: string) => {
    if (!scrambleRef.current) return
    gsap.to(scrambleRef.current, {
      duration: 0.5,
      scrambleText: {
        text,
        chars: '.:',
        speed: 0.5,
      },
      overwrite: true,
    })
  }

  useGSAP(
    () => {
      if (!scrambleRef.current) return
      scrambleRef.current.textContent = originalText
    },
    { scope: scrambleRef },
  )

  return (
    <span
      ref={scrambleRef}
      className={css({
        fontSize: { base: '7xl', md: '8xl' },
      })}
      onMouseOver={() => scramble(originalText)}
      onMouseOut={() => unscramble(originalText)}
      onFocus={() => scramble(originalText)}
      onBlur={() => unscramble(originalText)}
    >
      {originalText}
    </span>
  )
}
