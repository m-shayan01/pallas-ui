import { DecorativeBox } from '@/components/ui/render-helpers/decorative-box'
import { css } from '@styled-system/css'
import { AspectRatio } from '@styled-system/jsx'

export default function AspectRatioPreview() {
  return (
    <AspectRatio w="full" maxW="500px" ratio={16 / 9}>
      <DecorativeBox>
        <span>16:9 Aspect Ratio</span>
      </DecorativeBox>
    </AspectRatio>
  )
}
