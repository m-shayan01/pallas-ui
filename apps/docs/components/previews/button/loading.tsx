'use client'

import { Button } from '@/components/ui/button'
import { css } from '@styled-system/css'

export default function Example() {
  return (
    <div className={css({ display: 'flex', gap: '4', flexWrap: 'wrap', alignItems: 'center' })}>
      <Button size="sm" isLoading>
        Loading
      </Button>
      <Button isLoading variant="primary">
        Processing
      </Button>
      <Button size="lg" isLoading variant="outlined">
        Submitting
      </Button>
    </div>
  )
}
