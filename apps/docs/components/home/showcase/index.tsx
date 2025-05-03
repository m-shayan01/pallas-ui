import { css } from '@styled-system/css'
import { Flex } from '@styled-system/jsx'
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
          gap: 'layout.internal.lg',
          bg: 'transparent',
          mx: 'auto',
          maxW: '1200px',
        })}
      >
        {/* Column 1 */}
        <Flex direction="column" gap="layout.internal.lg" flex={1}>
          <FormShowcase />
          <DatePickerShowcase />
          <PopoverTooltipShowcase />
          <ProgressShowcase />
        </Flex>

        {/* Column 2 */}
        <Flex direction="column" gap="layout.internal.lg" flex={1}>
          <ProfileScenarioShowcase />
          <AccordionShowcase />
          <BadgeSeparatorShowcase />
          <ToastSelectShowcase />
        </Flex>

        {/* Column 3 */}
        <Flex direction="column" gap="layout.internal.lg" flex={1}>
          <MenubarShowcase />
          <FormControlsShowcase />
          <DayPickerShowcase />
          <SliderTabsShowcase />
        </Flex>
      </div>
    </ShowcaseContainer>
  )
}
