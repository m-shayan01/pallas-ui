'use client'

// import Link from 'next/link'
// import Image from 'next/image'
import { MDXContent } from '@content-collections/mdx/react'
import React from 'react'
//import { HashIcon } from 'lucide-react'

// // Component to create anchors for headings
// const HeadingAnchor = ({ id, level }) => {
//   if (!id) return null

//   return (
//     <Link
//       aria-label="Link to section"
//       href={`#${id}`}
//       className="ml-2 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600"
//     >
//       <HashIcon
//         className={`h-${level === 1 ? '5' : level === 2 ? '4' : '3.5'} w-${level === 1 ? '5' : level === 2 ? '4' : '3.5'}`}
//       />
//     </Link>
//   )
// }

// // Define MDX components
// const components = {
//   h1: ({ id, children, ...props }) => (
//     <h1
//       id={id}
//       className="mt-2 scroll-mt-20 text-3xl font-bold tracking-tight group flex items-center"
//       {...props}
//     >
//       {children}
//       <HeadingAnchor id={id} level={1} />
//     </h1>
//   ),
//   h2: ({ id, children, ...props }) => (
//     <h2
//       id={id}
//       className="mt-10 scroll-mt-20 text-2xl font-semibold tracking-tight group flex items-center"
//       {...props}
//     >
//       {children}
//       <HeadingAnchor id={id} level={2} />
//     </h2>
//   ),
//   h3: ({ id, children, ...props }) => (
//     <h3
//       id={id}
//       className="mt-8 scroll-mt-20 text-xl font-semibold tracking-tight group flex items-center"
//       {...props}
//     >
//       {children}
//       <HeadingAnchor id={id} level={3} />
//     </h3>
//   ),
//   h4: ({ id, children, ...props }) => (
//     <h4
//       id={id}
//       className="mt-8 scroll-mt-20 text-lg font-semibold tracking-tight group flex items-center"
//       {...props}
//     >
//       {children}
//       <HeadingAnchor id={id} level={4} />
//     </h4>
//   ),
//   a: ({ href, children, ...props }) => {
//     const isExternal = href?.startsWith('http')

//     if (isExternal) {
//       return (
//         <a
//           href={href}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="font-medium text-blue-600 hover:underline"
//           {...props}
//         >
//           {children}
//         </a>
//       )
//     }

//     return (
//       <Link
//         href={href || ''}
//         className="font-medium text-blue-600 hover:underline"
//         {...props}
//       >
//         {children}
//       </Link>
//     )
//   },
//   p: (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLParagraphElement> & React.HTMLAttributes<HTMLParagraphElement>) => <p className="mt-6 leading-7" {...props} />,
//   ul: (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLUListElement> & React.HTMLAttributes<HTMLUListElement>) => <ul className="my-6 ml-6 list-disc" {...props} />,
//   ol: (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLOListElement> & React.OlHTMLAttributes<HTMLOListElement>) => <ol className="my-6 ml-6 list-decimal" {...props} />,
//   li: (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLLIElement> & React.LiHTMLAttributes<HTMLLIElement>) => <li className="mt-2" {...props} />,
//   blockquote: (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLQuoteElement> & React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
//     <blockquote
//       className="mt-6 border-l-2 border-gray-300 pl-6 italic text-gray-700 dark:border-gray-700 dark:text-gray-400"
//       {...props}
//     />
//   ),
//   img: ({ alt, ...props }) => (
//     // biome-ignore lint/a11y/useAltText: <explanation>
// <img className="rounded-md" alt={alt} {...props} />
//   ),
//   hr: (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLHRElement> & React.HTMLAttributes<HTMLHRElement>) => <hr className="my-8 border-gray-200 dark:border-gray-800" {...props} />,
//   table: (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableElement> & React.TableHTMLAttributes<HTMLTableElement>) => (
//     <div className="my-6 w-full overflow-y-auto">
//       <table className="w-full border-collapse text-sm" {...props} />
//     </div>
//   ),
//   tr: (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>) => <tr className="border-t border-gray-300 dark:border-gray-700" {...props} />,
//   th: (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableHeaderCellElement> & React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => <th className="border border-gray-200 px-4 py-2 text-left font-bold dark:border-gray-700" {...props} />,
//   td: (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableDataCellElement> & React.TdHTMLAttributes<HTMLTableDataCellElement>) => <td className="border border-gray-200 px-4 py-2 text-left dark:border-gray-700" {...props} />,
//   pre: (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLPreElement> & React.HTMLAttributes<HTMLPreElement>) => (
//     <pre className="mt-6 mb-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-white" {...props} />
//   ),
//   code: ({ children, className }) => {
//     if (className) {
//       return <pre className={`${className} rounded p-4 overflow-x-auto`}>{children}</pre>
//     }
//     return <code className="rounded bg-gray-100 px-1 py-0.5 text-gray-900 dark:bg-gray-800 dark:text-gray-100">{children}</code>
//   },
// }

// Main MDX rendering component
export function MdxComponent({ code }: { code: string }) {
  return <MDXContent code={code} />
}
