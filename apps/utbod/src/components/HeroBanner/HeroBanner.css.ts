import { style } from '@vanilla-extract/css';
import * as colors from '@island.is/island-ui/theme';

export const bannerWrapper = style({
  backgroundColor: colors.blue600,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  padding: '2rem',
  position: 'relative',
  
  '@media': {
    '(max-width: 768px)': {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
    },
  },
});

export const iconCircle = style({
  backgroundColor: 'white',
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 0 30px rgba(0, 0, 0, 0.05)',

  '@media': {
    '(max-width: 768px)': {
      position: 'relative',
    },
    '(min-width: 769px)': {
      position: 'absolute',
      bottom: '-50px',
      left: '50px',
    }
  },
});

export const iconImage = style({
  width: '60%',
  height: '60%',
  objectFit: 'contain',
});

export const bannerContent = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginLeft: '25%',
  minHeight: '315px',

  '@media': {
    '(max-width: 768px)': {
      marginLeft: '0',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '1rem',
      minHeight: 'auto',
      width: 'auto',

    },
  },
});

export const smallerBannerContent = style({
  minHeight: '90px',
});

export const bannerText = style({
  color: 'white',
  fontSize: '2rem',
  fontWeight: '600',
});

export const bannerImageWrapper = style({
  position: 'relative',
  '@media': {
    '(max-width: 768px)': {
     display: 'none',
    },
  },
});

export const bannerImage = style({
  position: 'absolute',
  top: '-270px',
  right: '-200px',
});
