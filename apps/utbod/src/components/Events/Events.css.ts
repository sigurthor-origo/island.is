import { style } from '@vanilla-extract/css';
import * as colors from '@island.is/island-ui/theme';

export const time = style({
  color: '#00003C',
  flexShrink: 0,
  width: '80px',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: 300,
  lineHeight: '28px',
});

export const link = style({
  color: '#0061FF',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '300',
  lineHeight: '28px',
  textDecorationLine: 'underline',

  selectors: {
    '&:hover': {
      textDecoration: 'none',
    },
    '&:focus': {
      boxShadow: '0 0 0 2px rgba(26, 86, 219, 0.5)',
      borderRadius: '4px',
    },
  },
});
