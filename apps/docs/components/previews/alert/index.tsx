import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { icon } from '@styled-system/recipes'
import { Terminal } from 'lucide-react'

export default function Example() {
  return (
    <Alert>
      <Terminal className={icon()} />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  )
}
