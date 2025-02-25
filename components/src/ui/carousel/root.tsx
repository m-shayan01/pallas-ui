import { carousel } from '@styled-system/recipes'
import type { Assign } from '@styled-system/types'
import { useEffect, useRef, useState } from 'react'
import { createStyleContext } from '~/utils/style-context'
import type { RootProps } from '.'

export const { withProvider, withContext } = createStyleContext(carousel)

const Component = withProvider<
  React.ElementRef<'div'>,
  Assign<
    RootProps,
    {
      children: React.ReactNode
    }
  >
>('div', 'root')

export const Root = (props: RootProps) => {
  const { children, ...rest } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(0)

  const RootElement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setLength(RootElement.current?.getElementsByClassName('carousel__item').length || 0)
  }, [])

  useEffect(() => {
    updateItems(currentIndex)
  }, [currentIndex])

  const onClickPrevious = () => {
    setCurrentIndex((v) => (v === 0 ? length - 1 : v - 1))
  }

  const onClickNext = () => {
    setCurrentIndex((v) => (v === length - 1 ? 0 : v + 1))
  }

  const updateItems = (index: number) => {
    const items = RootElement.current?.getElementsByClassName('carousel__item')
    if (!items) return
    for (let i = 0; i < length; i++) {
      items[i].removeAttribute('data-visible')
    }
    items[index].setAttribute('data-visible', '')
  }

  return (
    <Component ref={RootElement} data-currentindex={currentIndex} {...rest}>
      {children({ onClickPrevious, onClickNext })}
    </Component>
  )
}
