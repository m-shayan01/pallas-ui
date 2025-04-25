import React from 'react'
import { PackageTabs } from './package-tabs'

interface InstallTabsProps {
  pkg: string
  dev?: boolean
}

export function InstallTabs({ pkg, dev = false }: InstallTabsProps) {
  const flag = dev ? ' --save-dev' : ''

  return (
    <PackageTabs
      npm={`npm install ${pkg}${flag}`}
      yarn={`yarn add ${pkg}${dev ? ' --dev' : ''}`}
      pnpm={`pnpm add ${pkg}${dev ? ' --save-dev' : ''}`}
    />
  )
}
