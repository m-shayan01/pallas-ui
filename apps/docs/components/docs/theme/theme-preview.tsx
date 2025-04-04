// 'use client'

// import { Button } from '@/components/ui/button'
// import { Switch } from '@/components/ui/switch'
// import { presetPrimaryColors } from '@pallas-ui/panda-preset/colors/paletteGenerator'
// import { generateColorMap } from '@pallas-ui/panda-preset/utils'
// import { css } from '@styled-system/css'
// import { useEffect, useState } from 'react'

// type ColorType = 'primary' | 'success' | 'warning' | 'error' | 'info'
// type ColorName = keyof typeof presetPrimaryColors

// interface ThemeColors {
//   primary: { name: ColorName; value: string }
//   success: { name: ColorName; value: string }
//   warning: { name: ColorName; value: string }
//   error: { name: ColorName; value: string }
//   info: { name: ColorName; value: string }
// }

// const defaultColors: ThemeColors = {
//   primary: { name: 'blue', value: presetPrimaryColors.blue ?? '' },
//   success: { name: 'green', value: presetPrimaryColors.green ?? '' },
//   warning: { name: 'gold', value: presetPrimaryColors.gold ?? '' },
//   error: { name: 'red', value: presetPrimaryColors.red ?? '' },
//   info: { name: 'cyan', value: presetPrimaryColors.cyan ?? '' },
// }

// const colorTypeLabels: Record<ColorType, string> = {
//   primary: 'Primary',
//   success: 'Success',
//   warning: 'Warning',
//   error: 'Error',
//   info: 'Info',
// }

// export function ThemePreview() {
//   const [colors, setColors] = useState<ThemeColors>(defaultColors)
//   const [cssVars, setCssVars] = useState<Record<string, string>>({})

//   useEffect(() => {
//     const vars: Record<string, string> = {}
//     Object.entries(colors).forEach(([type, color]) => {
//       const colorMap = generateColorMap(color.value)

//       const shadeNumbers = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

//       shadeNumbers.forEach((shade) => {
//         const colorValue = (colorMap as Record<number, string>)[shade]
//         if (colorValue) {
//           vars[`--colors-${type}-${shade}`] = colorValue
//         }
//       })

//       const mainColor = (colorMap as Record<number, string>)[500]
//       if (mainColor) {
//         vars[`--colors-${type}`] = mainColor
//       }
//     })

//     setCssVars(vars)
//   }, [colors])

//   const updateColor = (type: ColorType, colorName: ColorName) => {
//     setColors((prev) => ({
//       ...prev,
//       [type]: {
//         name: colorName,
//         value: presetPrimaryColors[colorName],
//       },
//     }))
//   }

//   const resetColors = () => {
//     setColors(defaultColors)
//   }

//   return (
//     <div className={css({ display: 'flex', flexDirection: 'column', gap: 'gap.component.lg' })}>
//       <div
//         className={css({
//           p: 'padding.block.lg',
//           border: '1px solid',
//           borderColor: 'border',
//           borderRadius: 'md',
//           bg: 'surface.container',
//         })}
//       >
//         <div
//           className={css({
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             mb: 'gap.component.lg',
//           })}
//         >
//           <h3 className={css({ fontSize: 'lg', fontWeight: 'semibold', color: 'text' })}>
//             Theme Editor
//           </h3>
//           <Button variant="outlined" size="sm" onClick={resetColors}>
//             Reset to Default
//           </Button>
//         </div>

//         <div
//           className={css({
//             display: 'grid',
//             gridTemplateColumns: { base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
//             gap: 'gap.component.md',
//           })}
//         >
//           {(Object.keys(colorTypeLabels) as ColorType[]).map((colorType) => (
//             <div
//               key={colorType}
//               className={css({
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: 'gap.inline.sm',
//               })}
//             >
//               {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
//               <label className={css({ fontSize: 'sm', fontWeight: 'medium', color: 'text' })}>
//                 {colorTypeLabels[colorType]}
//               </label>
//               <div
//                 className={css({
//                   display: 'grid',
//                   gridTemplateColumns: 'repeat(5, 1fr)',
//                   gap: 'gap.inline.xs',
//                 })}
//               >
//                 {Object.entries(presetPrimaryColors).map(([colorName, colorValue]) => (
//                   <button
//                     type="button"
//                     key={colorName}
//                     onClick={() => updateColor(colorType, colorName as ColorName)}
//                     className={css({
//                       width: '24px',
//                       height: '24px',
//                       borderRadius: 'sm',
//                       border: '2px solid',
//                       borderColor:
//                         colors[colorType as keyof ThemeColors].name === colorName
//                           ? 'primary'
//                           : 'transparent',
//                       cursor: 'pointer',
//                       transition: 'all 0.2s',
//                       _hover: {
//                         transform: 'scale(1.1)',
//                       },
//                     })}
//                     style={{ backgroundColor: colorValue }}
//                     title={colorName}
//                     aria-label={`Set ${colorType} color to ${colorName}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Preview section with dynamic styles */}
//       <div
//         className={css({
//           p: 'padding.block.lg',
//           border: '1px solid',
//           borderColor: 'border',
//           borderRadius: 'md',
//           bg: 'surface.container',
//         })}
//         style={cssVars}
//       >
//         <h3 className={css({ fontSize: 'lg', fontWeight: 'semibold', mb: 'gap.component.md' })}>
//           Component Preview
//         </h3>

//         <div className={css({ display: 'flex', flexDirection: 'column', gap: 'gap.component.xl' })}>
//           {/* Buttons */}
//           <div>
//             <h4 className={css({ fontSize: 'md', fontWeight: 'medium', mb: 'gap.component.sm' })}>
//               Buttons
//             </h4>
//             <div className={css({ display: 'flex', gap: 'gap.inline.md', flexWrap: 'wrap' })}>
//               <Button variant="primary">Primary Button</Button>
//               <Button variant="outlined">Outlined Button</Button>
//               <Button variant="dashed">Dashed Button</Button>
//               <Button variant="text">Text Button</Button>
//               <Button variant="link">Link Button</Button>
//             </div>
//           </div>

//           {/* Color variants - Remove colorScheme prop if not supported */}
//           <div>
//             <h4 className={css({ fontSize: 'md', fontWeight: 'medium', mb: 'gap.component.sm' })}>
//               Color Variants
//             </h4>
//             <div className={css({ display: 'flex', gap: 'gap.inline.md', flexWrap: 'wrap' })}>
//               <Button>Default</Button>
//               <Button variant="primary">Primary</Button>
//               <Button variant="outlined">Success</Button>
//               <Button variant="dashed">Warning</Button>
//               <Button variant="text">Error</Button>
//               <Button variant="link">Info</Button>
//             </div>
//           </div>

//           {/* Switches - Remove colorScheme prop if not supported */}
//           <div>
//             <h4 className={css({ fontSize: 'md', fontWeight: 'medium', mb: 'gap.component.sm' })}>
//               Switches
//             </h4>
//             <div
//               className={css({
//                 display: 'flex',
//                 gap: 'gap.inline.md',
//                 flexWrap: 'wrap',
//                 alignItems: 'center',
//               })}
//             >
//               <Switch defaultChecked />
//               <Switch defaultChecked />
//               <Switch defaultChecked />
//               <Switch defaultChecked />
//               <Switch defaultChecked />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

//theme-editor.mdx file:
// ---
// title: Theme Editor
// description: Customize and preview your theme colors
// order: 3
// ---

// # Theme Editor

// Customize the color palette for your Pallas UI components. Select different colors for primary, success, warning, error, and info states to see how they affect the appearance of components.

// <ThemePreview />

// ## How it works

// The theme editor allows you to experiment with different color combinations without modifying your actual design tokens. This is useful for:

// 1. Exploring different color schemes for your application
// 2. Testing accessibility and contrast with various color combinations
// 3. Previewing how components will look with custom branding colors

// When you select a color, the preview section updates in real-time to show how components would appear with your selected theme. This is achieved by dynamically generating CSS variables that override the default styles just for the preview section.
