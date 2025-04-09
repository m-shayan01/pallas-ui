import { Slider } from '@/components/ui/slider'
import { css } from '@styled-system/css'

export default function SliderCustomStepDemo() {
  return (
    <div>
      <Slider defaultValue={[25]} max={100} step={25} style={{ width: '100%' }} />
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        })}
      >
        <span className={css({ padding: '4px 4px' })}>0%</span>
        <span className={css({ padding: '4px 4px' })}>25%</span>
        <span className={css({ padding: '4px 4px' })}>50%</span>
        <span className={css({ padding: '4px 4px' })}>75%</span>
        <span className={css({ padding: '4px 4px' })}>100%</span>
      </div>
    </div>
  )
}
