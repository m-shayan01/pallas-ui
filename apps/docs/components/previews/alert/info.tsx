import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { icon } from '@styled-system/recipes'
import { InfoIcon } from 'lucide-react'

export default function Example() {
  return (
    <Alert variant="info">
      <InfoIcon className={icon()} />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>This action will update your current settings.</AlertDescription>
    </Alert>
  )
}
