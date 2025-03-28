// 'use client'

// import { css } from '@styled-system/css'
// import * as React from 'react'
// import Tabs from '../ui/tabs'

// type TabProps = React.ComponentProps<typeof Tabs.Content>
// type TabElement = React.ReactElement<TabProps> | false | null | undefined

// export interface TabsProps {
//   items: string[]
//   defaultIndex?: number
//   storageKey?: string
//   children: TabElement | TabElement[]
// }

// // `@theguild/remark-npm2yarn` compatible tabs
// export function NpmTabs({ items, storageKey, defaultIndex, children }: TabsProps) {
//   const [selectedIndex, setSelectedIndex] = React.useState<number>(defaultIndex ?? 0)

//   React.useEffect(() => {
//     if (!storageKey) {
//       return
//     }

//     // Get stored tab preference
//     const index = localStorage.getItem(storageKey)
//     if (index) {
//       setSelectedIndex(Number(index))
//     }

//     // Listen for changes in other tabs/windows
//     function handleStorageChange(event: StorageEvent) {
//       if (event.key === storageKey) {
//         setSelectedIndex(Number(event.newValue ?? '0'))
//       }
//     }

//     window.addEventListener('storage', handleStorageChange)
//     return () => {
//       window.removeEventListener('storage', handleStorageChange)
//     }
//   }, [storageKey])

//   // Update storage and notify other tabs
//   const handleTabChange = React.useCallback(
//     (value: string) => {
//       const index = Number(value)
//       setSelectedIndex(index)

//       if (storageKey) {
//         localStorage.setItem(storageKey, String(index))
//         window.dispatchEvent(
//           new StorageEvent('storage', { key: storageKey, newValue: String(index) }),
//         )
//       }
//     },
//     [storageKey],
//   )

//   // Map children and add value prop
//   const tabContent = React.Children.map(children, (child, i) => {
//     if (React.isValidElement(child)) {
//       return React.cloneElement(child, { value: String(i) })
//     }
//     return null
//   })

//   return (
//     <Tabs.Root
//       defaultValue={String(selectedIndex)}
//       onValueChange={handleTabChange}
//       variant="simple"
//     >
//       <Tabs.TabList
//         className={css({
//           overflowX: 'auto',
//           borderBottom: '1px solid',
//           borderColor: 'border',
//           '&::-webkit-scrollbar': {
//             display: 'none',
//           },
//           scrollbarWidth: 'none',
//         })}
//       >
//         {items.map((item, i) => (
//           <Tabs.Trigger key={i} value={String(i)}>
//             {item}
//           </Tabs.Trigger>
//         ))}
//       </Tabs.TabList>
//       {tabContent}
//     </Tabs.Root>
//   )
// }

// // Export a compatible Tab component
// export function NpmTab({ children, value }: { children: React.ReactNode; value?: string }) {
//   return <Tabs.Content value={value ?? '0'}>{children}</Tabs.Content>
// }
