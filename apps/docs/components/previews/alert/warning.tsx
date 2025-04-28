import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { icon } from '@styled-system/recipes'
import { AlertTriangle } from 'lucide-react'

export default function Example() {
  return (
    <Alert variant="warning">
      <AlertTriangle className={icon()} />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>Your license is about to expire in 10 days.</AlertDescription>
    </Alert>
  )
}
