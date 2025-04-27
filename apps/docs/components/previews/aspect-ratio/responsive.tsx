import { DecorativeBox } from '@/components/ui/render-helpers/decorative-box'
import { css } from '@styled-system/css'
import { AspectRatio } from '@styled-system/jsx'

export default function ResponsiveAspectRatioPreview() {
  return (
    <AspectRatio w="full" maxW="500px" ratio={{ base: 1, md: 16 / 9, lg: 21 / 9 }}>
      <DecorativeBox>
        <span>Responsive Aspect Ratio</span>
        <span className={css({ display: { base: 'none', md: 'inline' }, ml: 2 })}>
          (Changes at different breakpoints)
        </span>
      </DecorativeBox>
    </AspectRatio>
  )
}
