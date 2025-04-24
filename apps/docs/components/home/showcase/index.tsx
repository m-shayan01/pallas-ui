import { css } from '@styled-system/css'
import React from 'react'
import { AccordionShowcase } from './accordion-showcase'
import { BadgeSeparatorShowcase } from './badge-separator-showcase'
import { DatePickerShowcase } from './date-picker-showcase'
import { DayPickerShowcase } from './daypicker-showcase'
import { FormControlsShowcase } from './form-controls-showcase'
import { FormShowcase } from './form-showcase'
import { MenubarShowcase } from './menubar-showcase'
import { PopoverTooltipShowcase } from './popover-tooltip-showcase'
import { ProfileScenarioShowcase } from './profile-scenario-showcase'
import { ProgressShowcase } from './progress-showcase'
import { ShowcaseContainer } from './showcase-container'
import { SliderTabsShowcase } from './slider-tabs-showcase'
import { ToastSelectShowcase } from './toast-select-showcase'

export const ComponentShowcase = () => {
  return (
    <ShowcaseContainer title="Component Showcase">
      <div
        className={css({
          display: 'flex',
          flexDirection: { base: 'column', md: 'row' },
          gap: '6',
        })}
      >
        {/* Column 1 */}
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '6',
            flex: '1',
          })}
        >
          <FormShowcase />
          <DatePickerShowcase />
          <PopoverTooltipShowcase />
          <ProgressShowcase />
        </div>

        {/* Column 2 */}
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '6',
            flex: '1',
          })}
        >
          <ProfileScenarioShowcase />
          <AccordionShowcase />
          <BadgeSeparatorShowcase />
          <ToastSelectShowcase />
        </div>

        {/* Column 3 */}
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '6',
            flex: '1',
          })}
        >
          <MenubarShowcase />
          <FormControlsShowcase />
          <DayPickerShowcase />
          <SliderTabsShowcase />
        </div>
      </div>
    </ShowcaseContainer>
  )
}
