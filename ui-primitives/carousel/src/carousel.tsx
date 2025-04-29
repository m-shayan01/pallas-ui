'use client'

import useEmblaCarousel from 'embla-carousel-react'
import * as React from 'react'
import type { CarouselApi, CarouselRootProps } from './types'
import { CarouselContext, useCarousel } from './useCarousel'

export const CarouselRoot = React.forwardRef<React.ComponentRef<'section'>, CarouselRootProps>(
  ({ opts, setApi, plugins, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(opts, plugins)
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return
      }

      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === 'ArrowRight') {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext],
    )

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect(api)
      api.on('reInit', onSelect)
      api.on('select', onSelect)

      return () => {
        api?.off('select', onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <section
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </section>
      </CarouselContext.Provider>
    )
  },
)
CarouselRoot.displayName = 'CarouselRoot'

export const CarouselList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ ...props }, ref) => {
    const { carouselRef } = useCarousel()

    return (
      <div ref={carouselRef} style={{ overflow: 'hidden' }}>
        <div ref={ref} {...props} />
      </div>
    )
  },
)
CarouselList.displayName = 'CarouselList'

export const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ ...props }, ref) => {
    return <div ref={ref} role="group" aria-roledescription="slide" {...props} />
  },
)
CarouselItem.displayName = 'CarouselItem'

const srOnlyStyle: React.CSSProperties = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  borderWidth: '0',
}

export const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ children, ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel()

  return (
    <button ref={ref} disabled={!canScrollPrev} onClick={scrollPrev} {...props}>
      {children}
      <span style={srOnlyStyle}>Previous slide</span>
    </button>
  )
})
CarouselPrevious.displayName = 'CarouselPrevious'

export const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ children, ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel()

  return (
    <button ref={ref} disabled={!canScrollNext} onClick={scrollNext} {...props}>
      {children}
      <span style={srOnlyStyle}>Next slide</span>
    </button>
  )
})
CarouselNext.displayName = 'CarouselNext'

export const Root = CarouselRoot
export const List = CarouselList
export const Item = CarouselItem
export const Next = CarouselNext
export const Previous = CarouselPrevious
