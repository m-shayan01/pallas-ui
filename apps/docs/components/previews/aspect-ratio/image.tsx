import { css } from '@styled-system/css'
import { AspectRatio } from '@styled-system/jsx'

export default function ImageAspectRatioPreview() {
  return (
    <AspectRatio
      className={css({
        width: '100%',
        maxWidth: '500px',
      })}
      ratio={4 / 3}
    >
      <img
        src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1920&auto=format&fit=crop"
        alt="Nature landscape"
        className={css({
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          borderRadius: 'md',
        })}
      />
    </AspectRatio>
  )
}
