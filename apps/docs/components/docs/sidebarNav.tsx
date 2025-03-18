'use client'

import { allGuides } from 'content-collections'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function SidebarNav() {
  const pathname = usePathname()
  const sortedGuides = [...allGuides].sort((a, b) => a.order - b.order)

  return (
    <div>
      <div>
        <h2>Documentation</h2>
        <div>
          {sortedGuides.map((guide) => (
            <Link key={guide.slug} href={`/docs/${guide.slug}`}>
              {guide.title}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2>Components</h2>
        <p>Coming soon</p>
      </div>
    </div>
  )
}
