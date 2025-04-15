import Accordian from '@/components/ui/accordian/accordian'
import { ChevronDown } from 'lucide-react'
import { css } from '@styled-system/css'

export default function AccordionPreview() {
  return (
    <Accordian.Root type="single" style={{ width: '100%', border: '0' }}>
      <Accordian.Item value="item-1">
        <Accordian.ItemHeader 
          className={css({
            textStyle: 'lg !important', // Force lg text style at all breakpoints
            fontSize: 'lg !important',   // Backup approach
          })}
        >
          Is it accessible?
          <Accordian.ItemTrigger>
            <ChevronDown />
          </Accordian.ItemTrigger>
        </Accordian.ItemHeader>
        <Accordian.ItemContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </Accordian.ItemContent>
      </Accordian.Item>
      <Accordian.Item value="item-2">
        <Accordian.ItemHeader 
          className={css({
            textStyle: 'lg !important',
            fontSize: 'lg !important',
          })}
        >
          Is it styled?
          <Accordian.ItemTrigger>
            <ChevronDown />
          </Accordian.ItemTrigger>
        </Accordian.ItemHeader>
        <Accordian.ItemContent>
          Yes. It comes with default styles that matches the other components&apos; aesthetic.
        </Accordian.ItemContent>
      </Accordian.Item>
      <Accordian.Item value="item-3">
        <Accordian.ItemHeader 
          className={css({
            textStyle: 'lg !important',
            fontSize: 'lg !important',
          })}
        >
          Is it animated?
          <Accordian.ItemTrigger>
            <ChevronDown />
          </Accordian.ItemTrigger>
        </Accordian.ItemHeader>
        <Accordian.ItemContent>
          Yes. It&apos;s animated by default, but you can disable it if you prefer.
        </Accordian.ItemContent>
      </Accordian.Item>
    </Accordian.Root>
  )
}
