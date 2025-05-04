'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrambleTextPlugin } from 'gsap/all'
import { useRef } from 'react'

gsap.registerPlugin(useGSAP, ScrambleTextPlugin)

const originalText = 'Pallas UI'

export default function AnimatedBrandName() {
  const scrambleRef = useRef<HTMLSpanElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)
  const animatingRef = useRef(false)

  const scramble = (text: string) => {
    if (!scrambleRef.current || animatingRef.current) return
    animatingRef.current = true
    animationRef.current = gsap.to(scrambleRef.current, {
      duration: 1,
      scrambleText: {
        text,
        chars: '.:ˑː',
        speed: 0.5,
      },
      overwrite: true,
      onComplete: () => {
        animatingRef.current = false
      },
    })
  }

  const unscramble = (text: string) => {
    if (!scrambleRef.current || animatingRef.current) return
    animatingRef.current = true
    animationRef.current = gsap.to(scrambleRef.current, {
      duration: 0.5,
      scrambleText: {
        text,
        chars: '.:ˑː',
        speed: 0.5,
      },
      overwrite: true,
      onComplete: () => {
        animatingRef.current = false
      },
    })
  }

  useGSAP(
    () => {
      if (!scrambleRef.current) return
      scrambleRef.current.textContent = originalText
      return () => {
        if (animationRef.current) {
          animationRef.current.kill()
        }
        animatingRef.current = false
      }
    },
    { scope: scrambleRef },
  )

  return (
    <span
      ref={scrambleRef}
      onMouseOver={() => scramble(originalText)}
      onMouseOut={() => unscramble(originalText)}
      onFocus={() => scramble(originalText)}
      onBlur={() => unscramble(originalText)}
      onTouchStart={() => scramble(originalText)}
      onTouchEnd={() => unscramble(originalText)}
      onTouchCancel={() => unscramble(originalText)}
      onClick={() => scramble(originalText)}
      onKeyUp={() => scramble(originalText)}
    >
      {originalText}
    </span>
  )
}
