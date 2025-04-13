import type { Meta, StoryObj } from '@storybook/react'
import { css } from '@styled-system/css'
import { Calendar, Command, Home, Inbox, Menu, Plus, Search, Settings } from 'lucide-react'
import Avatar from '~/ui/avatar'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from '~/ui/sidebar'

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: 'Components/Sidebar',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
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

export const Default: Story = {
  argTypes: {
    variant: {
      options: ['sidebar', 'floating', 'inset'],
      control: 'inline-radio',
    },
    side: {
      options: ['left', 'right'],
      control: 'inline-radio',
    },
    collapsible: {
      options: ['offcanvas', 'icon', 'none'],
      control: 'inline-radio',
    },
  },
  args: {
    variant: 'sidebar',
    side: 'left',
    collapsible: 'offcanvas',
  },
  render: (props) => {
    const Main = props.variant === 'inset' ? SidebarInset : 'main'
    return (
      <SidebarProvider>
        {props.side === 'right' && (
          <Main style={{ flex: 1 }}>
            <SidebarTrigger />
          </Main>
        )}

        <Sidebar {...props}>
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
            <SidebarContentGroup />
          </SidebarContent>

          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" asChild>
                  <Footer />
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>

          <SidebarRail />
        </Sidebar>

        {props.side === 'left' && (
          <Main>
            <SidebarTrigger />
          </Main>
        )}
      </SidebarProvider>
    )
  },
}

export const Inset = () => (
  <SidebarProvider>
    <Sidebar variant="inset" side="left" collapsible="offcanvas">
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
        <SidebarContentGroup />
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Footer />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>

    <SidebarInset>
      <SidebarTrigger />
    </SidebarInset>
  </SidebarProvider>
)

export const Floating = () => (
  <SidebarProvider>
    <Sidebar variant="floating" side="left" collapsible="offcanvas">
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
        <SidebarContentGroup />
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Footer />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>

    <main>
      <SidebarTrigger />
    </main>
  </SidebarProvider>
)

export const Icons = () => (
  <SidebarProvider>
    <main>
      <SidebarTrigger />
    </main>

    <Sidebar variant="sidebar" side="right" collapsible="icon">
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
        <SidebarContentGroup />
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Footer />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  </SidebarProvider>
)

const Header = () => (
  <a
    href={'#' as string}
    className={css({
      display: 'flex',
      gap: 2,
      '.group:is([data-collapsible=icon]) &': {
        gap: 0,
      },
    })}
  >
    <div
      className={css({
        display: 'flex',
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

const Footer = () => (
  <a
    href={'#' as string}
    className={css({
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      '.group:is([data-collapsible=icon]) &': {
        gap: 0,
      },
    })}
  >
    <Avatar.Root
      css={{
        borderRadius: 'md',
        '.group:is([data-collapsible=icon]) &': {
          h: '8!',
        },
      }}
    >
      <Avatar.Image src={URL} />
    </Avatar.Root>
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
        Pallas UI
      </span>
      <span
        className={css({
          truncate: true,
          fontSize: '{xs}',
        })}
      >
        Carbonteq
      </span>
    </div>
  </a>
)

const URL =
  'https://images.unsplash.com/photo-1738008896551-9ab767d9e6ac?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const SidebarContentGroup = () => (
  <SidebarGroup>
    <SidebarGroupLabel>Application</SidebarGroupLabel>
    <SidebarGroupAction title="Application Menu" size="sm" variant="text">
      <Menu strokeWidth={1} size={20} />
    </SidebarGroupAction>
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
            {i === 2 && (
              <SidebarMenuAction title="Add Event" size="sm" variant="text">
                <Plus strokeWidth={1} size={20} />
              </SidebarMenuAction>
            )}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
)
