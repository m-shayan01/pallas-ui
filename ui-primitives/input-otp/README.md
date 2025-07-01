# Input OTP

An accessible one-time-password input component built on top of [input-otp](https://input-otp.rodz.dev/)

## Features

- Four different variants that can be customized
- Error state styling for each variant
- Support for copy-paste
- TypeScript support

## Installation

```bash
npm install @your-scope/input-otp
```

## Usage

```tsx
import Sidebar from '@your-scope/sidebar'

function Example() {
  return (
    <InputOTP.Container>
        <InputOTP.Root maxLength={6}>
            <InputOTP.Group>
            <InputOTP.Slot index={0} />
            <InputOTP.Slot index={1} />
            <InputOTP.Slot index={2} />
            <InputOTP.Slot index={3} />
            <InputOTP.Slot index={4} />
            <InputOTP.Slot index={5} />
            </InputOTP.Group>
        </InputOTP.Root>
    </InputOTP.Container>
  )
}
```

## Components

- `InputOTP.Container` - The container element, that contains the provider
- `InputOTP.Root` - The root element
- `InputOTP.Group` - The group wrapper element
- `InputOTP.Slot` - The input slot element

## Accessibility

The component follows WAI-ARIA patterns for sidebar navigation:
- Uses semantic HTML elements (`ul`, `li`, `a`)
- Includes proper ARIA labels and roles
- Maintains keyboard navigation support
- Provides screen reader friendly structure

## License

MIT
