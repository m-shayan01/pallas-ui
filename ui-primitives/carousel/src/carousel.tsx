'use client'

import useEmblaCarousel from 'embla-carousel-react'
import * as React from 'react'
import type { CarouselApi, CarouselProps } from './types'
import { CarouselContext, useCarousel } from './useCarousel'

export const CarouselRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ orientation = 'horizontal', opts, setApi, plugins, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  )
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
        orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
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
})
CarouselRoot.displayName = 'CarouselRoot'

export const CarouselList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel()

    return (
      <div ref={carouselRef} style={{ overflow: 'hidden' }}>
        <div
          ref={ref}
          // className={cn(
          //   'flex',
          //   orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          //   className,
          // )}
          {...props}
        />
      </div>
    )
  },
)
CarouselList.displayName = 'CarouselList'

export const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ ...props }, ref) => {
    const { orientation } = useCarousel()

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        // className={cn(
        //   'min-w-0 shrink-0 grow-0 basis-full',
        //   orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        //   className,
        // )}
        {...props}
      />
    )
  },
)
CarouselItem.displayName = 'CarouselItem'

export const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ children, ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <button
      ref={ref}
      // variant={variant}
      // size={size}
      // className={cn(
      //   'absolute  h-8 w-8 rounded-full',
      //   orientation === 'horizontal'
      //     ? '-left-12 top-1/2 -translate-y-1/2'
      //     : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
      //   className,
      // )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      {children}
      <span className="sr-only">Previous slide</span>
    </button>
  )
})
CarouselPrevious.displayName = 'CarouselPrevious'

export const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ children, ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <button
      ref={ref}
      // variant={variant}
      // size={size}
      // className={cn(
      //   'absolute h-8 w-8 rounded-full',
      //   orientation === 'horizontal'
      //     ? '-right-12 top-1/2 -translate-y-1/2'
      //     : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
      //   className,
      // )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      {children}
      <span className="sr-only">Next slide</span>
    </button>
  )
})
CarouselNext.displayName = 'CarouselNext'

export const Root = CarouselRoot
export const List = CarouselList
export const Item = CarouselItem
export const Next = CarouselNext
export const Previous = CarouselPrevious
