import { Slider } from '@/components/ui/slider'

export default function SliderCustomWidthDemo() {
  return <Slider defaultValue={[40]} max={100} step={1} style={{ width: '100%' }} />
}
