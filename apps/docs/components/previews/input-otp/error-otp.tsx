import InputOTP from '@/components/ui/input-otp'
import { Box, Stack } from '@styled-system/jsx'

const maxLength = 6

export default function ErrorExample() {
  return (
    <Stack align="flex-start" gap="4">
      <Stack align="flex-start" gap="1">
        <Box mb={2}>Box</Box>
        <InputOTP.Root maxLength={maxLength} styling="box" dataStatus="error">
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>

      <Stack align="flex-start" gap="1">
        <Box mb={2}>Filled</Box>
        <InputOTP.Root maxLength={maxLength} styling="filled" dataStatus="error">
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>

      <Stack align="flex-start" gap="1">
        <Box mb={2}>Underlined</Box>
        <InputOTP.Root maxLength={maxLength} styling="underlined" dataStatus="error">
          <InputOTP.Group>
            {Array.from({ length: maxLength }).map((_, i) => (
              <InputOTP.Slot key={i} index={i} />
            ))}
          </InputOTP.Group>
        </InputOTP.Root>
      </Stack>

      <Stack align="flex-start" gap="1">
        <Box mb={2}>Borderless</Box>
        <InputOTP.Root maxLength={maxLength} styling="borderless" dataStatus="error">
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
