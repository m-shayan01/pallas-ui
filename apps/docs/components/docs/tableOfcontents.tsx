// 'use client'

// import { useEffect, useState } from 'react'

// export function TableOfContents({ headings }) {
//   const [activeHeading, setActiveHeading] = useState('')

//   useEffect(() => {
//     const handleScroll = () => {
//       const headingElements = headings
//         .map(({ slug }) => document.getElementById(slug))
//         .filter(Boolean)

//       const visibleHeadings = headingElements.filter((elem) => {
//         if (!elem) return false

//         const rect = elem.getBoundingClientRect()
//         return rect.top < 200 && rect.top >= 0
//       })

//       if (visibleHeadings.length > 0) {
//         setActiveHeading(visibleHeadings[0].id)
//       }
//     }

//     handleScroll()
//     window.addEventListener('scroll', handleScroll, { passive: true })

//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [headings])

//   if (headings.length === 0) {
//     return null
//   }

//   return (
//     <div className="space-y-2">
//       <p className="font-medium">On This Page</p>
//       <ul className="m-0 list-none">
//         {headings.map((heading) => {
//           const isActive = activeHeading === heading.slug

//           return (
//             <li key={heading.slug} className={`${heading.level === 3 ? 'ml-4' : ''}`}>
//               <a
//                 href={`#${heading.slug}`}
//                 className={`block text-sm ${
//                   isActive
//                     ? 'font-medium text-blue-600 dark:text-blue-400'
//                     : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
//                 }`}
//               >
//                 {heading.text}
//               </a>
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }
