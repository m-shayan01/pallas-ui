import { defineAnimationStyles } from '@pandacss/dev'

export const animationStyles = defineAnimationStyles({
  slideInRight: {
    value: {
      transformOrigin: 'center',
      animationDuration: '{durations.fast}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationName: 'slide-in-right, fade-in',
    },
  },
  slideInLeft: {
    value: {
      transformOrigin: 'center',
      animationDuration: '{durations.fast}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationName: 'slide-in-left, fade-in',
    },
  },
  slideOutRight: {
    value: {
      transformOrigin: 'center',
      animationDuration: '{durations.fast}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationName: 'slide-out-right, fade-out',
    },
  },
  slideOutLeft: {
    value: {
      transformOrigin: 'center',
      animationDuration: '{durations.fast}',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      animationName: 'slide-out-left, fade-out',
    },
  },
})
