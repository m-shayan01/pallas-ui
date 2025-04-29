import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { icon } from '@styled-system/recipes'
import { AlertCircle } from 'lucide-react'

export default function Example() {
  return (
    <Alert variant="error">
      <AlertCircle className={icon()} />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
    </Alert>
  )
}
