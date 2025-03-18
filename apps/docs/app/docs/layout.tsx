import { SidebarNav } from '../../components/docs/sidebarNav'

export default function DocsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <aside>
        <SidebarNav />
      </aside>
      {children}
    </div>
  )
}
