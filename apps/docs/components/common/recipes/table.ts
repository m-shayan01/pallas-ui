import { cva } from '@styled-system/css'

export const typographyTableContainer = cva({
  base: {
    my: '6',
    w: 'full',
    overflowX: 'auto',
  },
})

export const typographyTable = cva({
  base: {
    w: 'full',
    borderCollapse: 'separate',
    borderSpacing: '0',
    borderRadius: 'md',
    border: '1px solid',
    borderColor: 'border',
    fontSize: 'sm',

    // add border to column
    '& code': {
      padding: '0.25rem 0.5rem',
      fontSize: 'sm',
      lineHeight: 'relaxed',
    },

    '& tr': {
      m: 0,
      borderTop: 'base',
      p: 0,

      _even: {
        bg: 'fill.tertiary',
      },

      '& th': {
        fontWeight: 'bold',
        fontSize: 'md',
      },

      '& th, & td': {
        border: 'base',
        px: '4',
        py: '2',
        textAlign: 'left',

        '&[align=center]': {
          textAlign: 'center',
        },

        '&[align=right]': {
          textAlign: 'right',
        },
      },
    },
  },
})
