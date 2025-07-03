import InputOTP from '@/components/ui/input-otp'
import { Box, Stack } from '@styled-system/jsx'

const maxLength = 6

export default function SuccessExample() {
  return (
    <Stack align="flex-start" gap="6">
      <Stack align="flex-start" gap="1">
        <Box mb={2}>Unstyled</Box>
        <InputOTP.Root maxLength={maxLength} dataStatus="success">
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>

      <Stack align="flex-start" gap="1">
        <Box mb={2}>Box</Box>
        <InputOTP.Root maxLength={maxLength} styling="box" dataStatus="success">
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>

      <Stack align="flex-start" gap="1">
        <Box mb={2}>Filled</Box>
        <InputOTP.Root maxLength={maxLength} styling="filled" dataStatus="success">
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>

      <Stack align="flex-start" gap="1">
        <Box mb={2}>Underlined</Box>
        <InputOTP.Root maxLength={maxLength} styling="underlined" dataStatus="success">
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>
    </Stack>
  )
}
