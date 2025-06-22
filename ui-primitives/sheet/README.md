# Sheet

A flexible and accessible bottom sheet component built with Vaul primitives for creating slide-out panels and overlays.

## Features

- Accessible slide-out panels and overlays
- Background scaling and blur effects
- Drag to dismiss functionality
- Nested sheet support
- TypeScript support
- Follows Vaul patterns

## Installation

```bash
npm install @pallas-ui/sheet
```

## Usage

```tsx
import { Sheet } from '@pallas-ui/sheet'

function Example() {
  return (
    <Sheet.Root>
      <Sheet.Trigger>Open Sheet</Sheet.Trigger>
      <Sheet.Portal>
        <Sheet.Overlay />
        <Sheet.Content>
          <Sheet.Handle />
          <Sheet.Header>
            <Sheet.Title>Are you absolutely sure?</Sheet.Title>
            <Sheet.Description>This action cannot be undone.</Sheet.Description>
          </Sheet.Header>
          
          <div>Your content goes here</div>
          
          <Sheet.Footer>
            <Sheet.Close asChild>
              <button>Cancel</button>
            </Sheet.Close>
            <button>Submit</button>
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet.Portal>
    </Sheet.Root>
  )
}
```

## Components

- `Sheet.Root` - The root sheet element that wraps the entire component
- `Sheet.NestedRoot` - For creating nested sheets within other sheets
- `Sheet.Trigger` - The element that triggers the sheet to open
- `Sheet.Portal` - Portals the sheet content to the document body
- `Sheet.Overlay` - The backdrop overlay behind the sheet
- `Sheet.Content` - The main content container of the sheet
- `Sheet.Header` - Header section wrapper for title and description
- `Sheet.Footer` - Footer section wrapper for actions
- `Sheet.Title` - The sheet title element
- `Sheet.Description` - The sheet description element
- `Sheet.Handle` - Drag handle for dismissing the sheet
- `Sheet.Close` - Button to close the sheet

## Props

### Sheet.Root
- `open` - Controls the open state of the sheet
- `onOpenChange` - Callback when the open state changes
- `shouldScaleBackground` - Whether to scale the background (default: true)
- `dismissible` - Whether the sheet can be dismissed (default: true)
- `snapPoints` - Array of snap points for the sheet
- `activeSnapPoint` - The currently active snap point

## Accessibility

The component follows WAI-ARIA patterns for modal dialogs:
- Uses semantic HTML elements with proper ARIA attributes
- Maintains focus management and keyboard navigation
- Provides screen reader friendly structure
- Supports escape key to close
- Includes proper role and aria-label attributes

## Styling

The sheet component is unstyled by default, allowing you to apply your own styles using Panda CSS:

```tsx
import { css } from '@styled-system/css'

<Sheet.Content className={css({ bg: 'white', p: 6, roundedTop: 'lg' })}>
  <Sheet.Title className={css({ fontSize: 'xl', fontWeight: 'bold', mb: 2 })}>Title</Sheet.Title>
  <Sheet.Description className={css({ color: 'gray.600', mb: 4 })}>Description</Sheet.Description>
</Sheet.Content>
```

## License

MIT 