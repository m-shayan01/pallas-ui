'use client'

import { DayPicker } from '@/components/ui/daypicker'
import { css } from '@styled-system/css'
import { Box } from '@styled-system/jsx'
import { addDays } from 'date-fns'
import React from 'react'
import { ShowcaseCard } from './showcase-card'

export const DayPickerShowcase = () => {
  const today = new Date()
  const defaultSelected = {
    from: today,
    to: addDays(today, 5),
  }

  return (
    <ShowcaseCard
      title="Date Selection"
      description="Select dates for your reservation or appointment"
      paddingBlock="0"
      paddingTitle="6"
    >
      <Box>
        <DayPicker
          mode="range"
          defaultMonth={today}
          selected={defaultSelected}
          numberOfMonths={1}
          className={css({
            mx: 'auto',
            bg: 'white',
            p: '2',
            borderRadius: 'md',
            border: '1px solid',
            borderColor: 'border',
            boxShadow: 'sm',
          })}
        />
      </Box>
    </ShowcaseCard>
  )
}
