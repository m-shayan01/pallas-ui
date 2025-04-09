import { Input } from '@/components/ui/input'
import { css } from '@styled-system/css'

export default function Example() {
  return (
    <div className={css({ display: 'grid', gap: '4' })}>
      <div>
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium', marginBottom: '2' })}>
          Size Variants
        </h3>
        <div className={css({ display: 'grid', gap: '2' })}>
          <Input size="sm" />
          <Input size="md" />
          <Input size="lg" />
        </div>
      </div>

      <div>
        <h3 className={css({ fontSize: 'sm', fontWeight: 'medium', marginBottom: '2' })}>
          Shape Variants
        </h3>
        <div className={css({ display: 'grid', gap: '2' })}>
          <Input shape="default" />
          <Input shape="rounded" />
          <Input shape="circle" />
        </div>
      </div>
    </div>
  )
}
