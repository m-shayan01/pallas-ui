import { CircleCheck, Info, type LucideProps, XCircle } from 'lucide-react'

export type ToastIconPropTypes = LucideProps & {
  type?: string
}

export default function Icon({ type, ...props }: ToastIconPropTypes) {
  switch (type) {
    case 'success':
      return <CircleCheck {...props} />
    case 'error':
      return <XCircle {...props} />
    case 'info':
      return <Info {...props} />
    case 'warning':
      return <Info {...props} />

    default:
      return null
  }
}
