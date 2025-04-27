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

    // add border to column

    '& tr': {
      m: 0,
      borderTop: 'base',
      p: 0,

      _even: {
        bg: 'fill.secondary',
      },

      '& th': {
        fontWeight: 'bold',
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
