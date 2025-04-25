import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { InfoIcon } from 'lucide-react'

export default function Example() {
  return (
    <Alert variant="info">
      <InfoIcon className="h-4 w-4" />
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>This action will update your current settings.</AlertDescription>
    </Alert>
  )
}
