import type { Meta, StoryObj } from '@storybook/react'
import { css } from '@styled-system/css'
import { Calendar, Command, Home, Inbox, Plus, Search, Settings } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from '~/ui/sidebar'

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: 'Components/Sidebar',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

const MENU_ITEMS = [
  {
    title: 'Home',
    url: '#',
    icon: Home,
  },
  {
    title: 'Inbox',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'Calendar',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'Search',
    url: '#',
    icon: Search,
  },
  {
    title: 'Settings',
    url: '#',
    icon: Settings,
  },
]

const Header = () => (
  <a
    href={'#' as string}
    className={css({
      display: 'flex',
      gap: 2,
    })}
  >
    <div
      className={css({
        display: 'flex',
        aspectRatio: 'square',
        size: '{spacing.9}',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '{lg}',
        bg: '{colors.primary.active}',
        color: '{colors.surface.container}',
      })}
    >
      <Command className="size-4" />
    </div>
    <div
      className={css({
        display: 'grid',
        flex: '1',
        textAlign: 'left',
        fontSize: '{sm}',
        lineHeight: 'tight',
      })}
    >
      <span
        className={css({
          truncate: true,
          fontWeight: 'semibold',
        })}
      >
        Acme Inc
      </span>
      <span
        className={css({
          truncate: true,
          fontSize: '{xs}',
        })}
      >
        Enterprise
      </span>
    </div>
  </a>
)

export const Default: Story = {
  argTypes: {},
  args: {},
  render: () => (
    <SidebarProvider>
      <Sidebar variant="sidebar" side="left" collapsible="offcanvas">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Header />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarSeparator />

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {MENU_ITEMS.map((item, i) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton icon={<item.icon size="16" />}>
                      <a href={item.url}>
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                    {i === 0 && (
                      <>
                        <SidebarMenuBadge>12</SidebarMenuBadge>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton>Users</SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton>Groups</SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton>Media</SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  ),
}
