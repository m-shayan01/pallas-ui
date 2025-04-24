'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { css } from '@styled-system/css'
import React from 'react'
import { ShowcaseCard } from './showcase-card'

export const DatePickerShowcase = () => {
  return (
    <ShowcaseCard
      title="Date Selection"
      description="Select dates for your reservation or appointment"
      //   colSpan={{ base: 1, md: 8 }} // This will make it span 4 columns on md screens
    >
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '4',
        })}
      >
        <div>
          <Label>Select Date</Label>
          <Input>
            <Input.DayPicker id="date" placeholder="Choose a date" />
          </Input>
        </div>

        <div>
          <Label>Number of Guests</Label>
          <Input>
            <Input.Number placeholder="Input Number of Guests" min={1} max={10} />
          </Input>
        </div>

        <div
          className={css({
            display: 'flex',
            justifyContent: 'flex-end',
            mt: '2',
          })}
        >
          <Button variant="primary">Book Reservation</Button>
        </div>
      </div>
    </ShowcaseCard>
  )
}
