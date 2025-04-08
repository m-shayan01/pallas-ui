import { defineSlotRecipe } from '@pandacss/dev'

export const sidebar = defineSlotRecipe({
  className: 'sidebar',
  description: 'Styles for the Sidebar component',
  slots: [
    'provider',
    'root', // Outer container
    'gap', // Transition width handler
    'fixed', // Fixed positioned wrapper
    'inner', // sidebar content wrapper
    'content',
    'trigger',
    'rail',
    'inset',
    'input',
    'header',
    'footer',
    'separator',
    'group',
    'groupLabel',
    'groupAction',
    'groupContent',
    'menu',
    'menuItem',
    'menuButton',
    'menuAction',
    'menuBadge',
    'menuSkeleton',
    'menuSub',
    'menuSubItem',
    'menuSubButton',
  ],
  base: {
    provider: {
      // 'group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar'
      display: 'flex',
      minHeight: '100svh', // or use a token if defined
      width: 'full',
      '&:has([data-variant=inset])': {
        backgroundColor: 'sidebar',
      },
    },
    root: {
      // className="group peer hidden text-sidebar-foreground md:block"
      display: 'none',
      color: 'sidebar.foreground',
      md: { display: 'block' },
    },
    gap: {
      // cx(
      //   'relative w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear',
      //   'group-data-[collapsible=offcanvas]:w-0',
      //   'group-data-[side=right]:rotate-180',
      //   variant === 'floating' || variant === 'inset'
      //     ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
      //     : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]',
      // )
      position: 'relative',
      width: '{sizes.2xs}',
      bg: 'transparent',
      transition: 'width 200ms ease-linear',

      '.group:is([data-collapsible=offcanvas]) &': { width: '0' },
      '.group:is([data-side=right]) &': { transform: 'rotate(180deg)' },

      '.group:is([data-variant=floating], [data-variant=inset]):is([data-collapsible=icon]) &': {
        w: 'calc(3rem + {spacing.4})',
      },
      '.group:is([data-variant=sidebar]):is([data-collapsible=icon]) &': {
        default: '3rem',
      },
    },
    fixed: {
      // cx(
      //   'fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex',
      //   side === 'left'
      //     ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
      //     : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
      //   // Adjust the padding for floating and inset variants.
      //   variant === 'floating' || variant === 'inset'
      //     ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
      //     : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l',
      //   className,
      // )
      position: 'fixed',
      insetY: '0',
      zIndex: 10,
      h: 'screen',
      w: '{sizes.2xs}',
      transition: 'left, right, width 200ms ease-linear',
      display: 'none',
      md: { display: 'flex' },

      '.group:is([data-side=left]) &': {
        left: '0',
        right: 'auto',
      },
      '.group:is([data-side=right]) &': {
        right: '0',
        left: 'auto',
      },

      '.group:is([data-collapsible=offcanvas]):is([data-side=left]) &': {
        left: 'calc({sizes.2xs} * -1)',
      },
      '.group:is([data-collapsible=offcanvas]):is([data-side=right]) &': {
        right: 'calc({sizes.2xs} * -1)',
      },

      '.group:is([data-variant=floating], [data-variant=inset]) &': {
        p: 2,
      },

      '.group:is([data-variant=floating], [data-variant=inset]):is([data-collapsible=icon]) &': {
        w: 'calc({sizes.xs} + {spacing.4} + 2px)',
      },
      '.group:is([data-variant=sidebar]):is([data-collapsible=icon]) &': {
        w: '{sizes.xs}',
      },
      '.group:is([data-variant=sidebar]):is([data-side=left]) &': {
        borderRightWidth: '1',
      },
      '.group:is([data-variant=sidebar]):is([data-side=right]) &': {
        borderLeftWidth: '1',
      },
    },
    inner: {
      // className="flex h-full w-full flex-col bg-sidebar
      // group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
      display: 'flex',
      h: 'full',
      w: 'full',
      flexDirection: 'column',
      bg: '{colors.surface.layout}',

      '.group:is([data-variant=floating]) &': {
        rounded: 'lg',
        border: '1px solid {colors.border}',
        shadow: 'lg',
      },
    },
    content: {
      // 'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden'
      minHeight: '0',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      overflow: 'auto',
      gap: 2,
      '.group:is([data-collapsible=icon]) &': {
        overflow: 'hidden',
      },
    },
    trigger: {
      // 'h-7 w-7'
    },
    rail: {
      // 'absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex',
      // '[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize',
      // '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
      // 'group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar',
      // '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
      // '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
      position: 'absolute',
      insetY: 0,
      width: 4,
      cursor: 'col-resize',
      _hover: {
        bg: '{colors.border}',
      },
    },
    inset: {
      position: 'relative',
      bg: 'background',
      rounded: 'xl',
      shadow: 'md',
    },
    input: {
      bg: 'background',
      _focusVisible: {
        ring: '2px',
        ringColor: '{colors.primary.hover}',
      },
    },
    header: {
      py: 2,
      px: 3,
    },
    footer: {
      py: 2,
      px: 3,
    },
    separator: {
      mx: 2,
      bg: '{colors.border}',
    },
    group: {
      // relative flex w-full min-w-0 flex-col p-2
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: 'full',
      minWidth: '0',
      px: 2,
    },
    groupLabel: {
      // cx(
      //   'flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring
      //    transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
      //   'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
      // )
      display: 'flex',
      flexShrink: 0,
      alignItems: 'center',
      borderRadius: 'md',
      px: 2,
      fontSize: 'xs',
      fontWeight: '{medium}',
      color: '{colors.text.secondary}',
      outline: 'none',
      transition: 'opacity 200ms ease-linear',

      '.group:is([data-collapsible=icon]) &': {
        mt: 8,
        opacity: 0,
      },
    },
    groupContent: {
      // w-full text-sm
      width: 'full',
      textStyle: 'sm',
    },
    groupAction: {
      position: 'absolute',
      top: 2,
      right: 2,
    },
    menu: {
      // 'flex w-full min-w-0 flex-col gap-1'
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      gap: 1,
    },
    menuItem: {
      // 'group/menu-item relative'
      position: 'relative',
    },
    menuButton: {
      // peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding]
      // hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2
      // active:bg-sidebar-accent active:text-sidebar-accent-foreground
      // disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50
      // data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground
      // data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground
      // group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8
      width: 'full',
      overflow: 'hidden',
      justifyContent: 'left',
      '&[data-state=open]': {
        bg: 'sidebar.accent',
        color: 'sidebar.accent.foreground',
      },
      '.group:is([data-collapsible=icon]) &': {
        p: 2,
      },
      '& > span:last-of-type': {
        truncate: true,
      },
      '& > svg': {
        size: 4,
        flexShrink: 0,
      },
    },
    menuAction: {
      position: 'absolute',
      top: 2,
      right: 2,
    },
    menuBadge: {
      position: 'absolute',
      top: 2,
      right: 2,
    },
    menuSub: {
      borderLeft: '1px',
      borderColor: '{colors.border}',
      pl: 2,
      ml: 3,
    },
  },
  // variants: {
  //   variant: {
  //     floating: {
  //       root: {
  //         rounded: 'lg',
  //         border: '1px',
  //         borderColor: '{colors.border}',
  //         shadow: 'lg',
  //       },
  //     },
  //     inset: {
  //       root: {
  //         bg: 'background',
  //       },
  //     },
  //   },
  //   collapsible: {
  //     icon: {
  //       root: {
  //         width: '3rem',
  //       },
  //     },
  //     offcanvas: {
  //       root: {
  //         width: 0,
  //       },
  //     },
  //   },
  //   side: {
  //     left: {
  //       root: {
  //         left: 0,
  //         borderRight: '1px',
  //         borderColor: '{colors.border}',
  //       },
  //     },
  //     right: {
  //       root: {
  //         right: 0,
  //         borderLeft: '1px',
  //         borderColor: '{colors.border}',
  //       },
  //     },
  //   },
  //   size: {
  //     sm: {
  //       menuButton: {
  //         height: 7,
  //         fontSize: 'xs',
  //       },
  //     },
  //     md: {
  //       menuButton: {
  //         height: 8,
  //         fontSize: 'sm',
  //       },
  //     },
  //     lg: {
  //       menuButton: {
  //         height: 12,
  //       },
  //     },
  //   },
  // },
  // defaultVariants: {
  //   side: 'left',
  //   collapsible: 'offcanvas',
  //   size: 'md',
  // },
})
