import { css } from '@styled-system/css'

interface FeatureProps {
  title: string
  description: string
}

export function Feature({ title, description }: FeatureProps) {
  return (
    <div className={css({
      p: 'layout.internal.md', // Using internal layout spacing
      borderRadius: 'lg',
      border: '1px solid',
      borderColor: 'border.secondary',
      bg: 'surface.container', // Using container surface color
    })}>
      <h3 className={css({ 
        fontSize: 'xl', 
        fontWeight: 'semibold', 
        mb: 'gap.inline.md', // Using inline gap spacing
        color: 'text', // Using default text color
      })}>
        {title}
      </h3>
      <p className={css({ 
        color: 'text.secondary', // Using secondary text color
        lineHeight: 'relaxed',
      })}>
        {description}
      </p>
    </div>
  )
}