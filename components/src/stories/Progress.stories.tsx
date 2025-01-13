import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx'
import Progress from '~/ui/progress'
import type { RootProps } from '~/ui/progress'

const meta: Meta<RootProps> = {
  title: 'Components/Progress',
  tags: ['autodocs'],
  render: ({ ...props }) => (
    <Progress.Root {...props}>
      {({ percentage, valueText }) => {
        return (
          <>
            <svg viewBox="0 0 100 4">
              <title>progress</title>
              <Progress.LineTrack x2={100} y1={2} y2={2} />
              <Progress.LineFill x2={percentage} y1={2} y2={2} />
            </svg>
            <Progress.Label>{valueText}</Progress.Label>
          </>
        )
      }}
    </Progress.Root>
  ),
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    strokeLinecap: {
      control: 'inline-radio',
      options: ['round', 'butt'],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    strokeLinecap: 'butt',
    size: 'md',
    value: 50,
  },
}

export const Variants = () => (
  <Stack>
    <Progress.Root value={30} size="sm">
      {({ percentage, valueText }) => {
        return (
          <>
            <svg viewBox="0 0 100 4">
              <title>progress</title>
              <Progress.LineTrack x2={100} y1={2} y2={2} />
              <Progress.LineFill x2={percentage} y1={2} y2={2} />
            </svg>
            <Progress.Label>{valueText}</Progress.Label>
          </>
        )
      }}
    </Progress.Root>

    <Progress.Root value={70} strokeLinecap="round">
      {({ percentage, valueText }) => {
        return (
          <>
            <svg viewBox="0 0 100 4">
              <title>progress rounded</title>
              <Progress.LineTrack x1={1} x2={100 - 1} y1={2} y2={2} />
              <Progress.LineFill x1={1} x2={percentage} y1={2} y2={2} />
            </svg>
            <Progress.Label>{valueText}</Progress.Label>
          </>
        )
      }}
    </Progress.Root>

    <Progress.Root value={70} strokeLinecap="round" size="lg">
      {({ percentage, valueText }) => {
        return (
          <>
            <svg viewBox="0 0 100 4">
              <title>progress large</title>
              <Progress.LineTrack x1={2} x2={100 - 2} y1={2} y2={2} />
              <Progress.LineFill x1={2} x2={percentage} y1={2} y2={2} />
            </svg>
            <Progress.Label>{valueText}</Progress.Label>
          </>
        )
      }}
    </Progress.Root>

    <Progress.Root value={40}>
      {({ percentage, valueText }) => {
        return (
          <>
            <svg viewBox="0 0 100 4">
              <title>progress steps</title>
              <Progress.LineTrack x1={0} x2={100} y1={2} y2={2} strokeDasharray="9 1" />
              <Progress.LineFill x1={0} x2={percentage} y1={2} y2={2} strokeDasharray="9 1" />
            </svg>
            <Progress.Label>{valueText}</Progress.Label>
          </>
        )
      }}
    </Progress.Root>

    <Progress.Root value={40} size="lg" color="error" style={{ width: 300 }}>
      {({ percentage, valueText }) => {
        return (
          <>
            <svg viewBox="0 0 25 4">
              <title>progress steps small</title>
              <Progress.LineTrack x1={0} x2={25} y1={2} y2={2} strokeDasharray="2 0.5" />
              <Progress.LineFill
                x1={0}
                x2={(Number(percentage) * 25) / 100}
                y1={2}
                y2={2}
                strokeDasharray="2 0.5"
              />
            </svg>
            <Progress.Label>{valueText}</Progress.Label>
          </>
        )
      }}
    </Progress.Root>

    {/* CIRCLE */}
    <Progress.Root value={40} style={{ width: 300 }}>
      {({ percentage, valueText }) => {
        const circumference = 2 * 45 * Math.PI
        return (
          <>
            <svg viewBox="0 0 100 100" fill="none">
              <title>progress cricle</title>
              <Progress.CircleTrack cx="50" cy="50" r="45" />
              <Progress.CircleFill
                cx="50"
                cy="50"
                r="45"
                strokeDashoffset={((100 - Number(percentage)) * circumference) / 100}
                strokeDasharray={`${circumference} ${circumference}`}
                transform="rotate(-90 50 50)"
              />
            </svg>
            <Progress.Label>{valueText}</Progress.Label>
          </>
        )
      }}
    </Progress.Root>

    <Progress.Root value={60} size="lg" strokeLinecap="round" style={{ width: 300 }}>
      {({ percentage, valueText }) => {
        const circumference = 2 * 45 * Math.PI
        return (
          <>
            <svg viewBox="0 0 100 100" fill="none">
              <title>progress cricle large rounded</title>
              <Progress.CircleTrack cx="50" cy="50" r="45" />
              <Progress.CircleFill
                cx="50"
                cy="50"
                r="45"
                strokeDashoffset={((100 - Number(percentage)) * circumference) / 100}
                strokeDasharray={`${circumference} ${circumference}`}
                transform="rotate(-90 50 50)"
              />
            </svg>
            <Progress.Label>{valueText}</Progress.Label>
          </>
        )
      }}
    </Progress.Root>

    <Progress.Root value={70} style={{ width: 300 }}>
      {({ percentage, valueText }) => {
        const circumference = 2 * 45 * Math.PI
        const step = circumference / 10
        return (
          <>
            <svg viewBox="0 0 100 100" fill="none">
              <title>progress circle steps</title>
              <mask id="mask1" maskContentUnits="objectBoundingBox">
                <rect fill="black" x="0" y="0" width="100%" height="100%" />
                <circle
                  cx="0.5"
                  cy="0.5"
                  r="0.5"
                  stroke="white"
                  strokeWidth="0.2"
                  strokeDasharray={`${Math.PI} ${Math.PI}`}
                  strokeDashoffset={((100 - Number(percentage)) * Math.PI) / 100}
                />
              </mask>
              <Progress.CircleTrack
                cx="50"
                cy="50"
                r="45"
                strokeDasharray={`${step * 0.9} ${step * 0.1}`}
                transform="rotate(-90 50 50)"
              />
              <Progress.CircleFill
                cx="50"
                cy="50"
                r="45"
                strokeDasharray={`${step * 0.9} ${step * 0.1}`}
                transform="rotate(-90 50 50)"
                mask="url(#mask1)"
              />
            </svg>
            <Progress.Label>{valueText}</Progress.Label>
          </>
        )
      }}
    </Progress.Root>
  </Stack>
)
