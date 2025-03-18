import { allGuides } from 'content-collections'
import { notFound } from 'next/navigation'
import React from 'react'
import { MdxComponent } from '../../../components/docs/mdx-components'

export async function generateStaticParams() {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return allGuides.map((guide: { slug: any }) => ({
    slug: [guide.slug],
  }))
}

async function getGuideFromParams(params: { slug: string[] }) {
  const { slug } = await params
  const slugger = slug?.join('/') || 'introduction'
  return allGuides.find((guide: { slug: string }) => guide.slug === slugger)
}

export async function generateMetadata({ params }: { params: { slug: string[] } }) {
  const guide = await getGuideFromParams(params)

  if (!guide) {
    return {}
  }

  return {
    title: guide.title,
    description: guide.description,
  }
}

export default async function GuidePage({ params }: { params: { slug: string[] } }) {
  const { slug } = await params
  const slugger = slug?.join('/')

  const guide = allGuides.find((guide: { slug: string }) => guide.slug === slugger)

  if (!guide) {
    notFound()
  }

  return (
    <main>
      <div>
        <div>
          <div>Guides</div>
          <div>/</div>
          <div>{guide.title}</div>
        </div>

        <div className="mt-8">
          <MdxComponent code={guide.mdx} />
        </div>
      </div>
    </main>
  )
}
