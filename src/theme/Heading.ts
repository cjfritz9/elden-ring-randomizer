import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const heading1 = defineStyle({
  fontSize: '64px',
  fontWeight: '400',
  textAlign: 'center',
  fontFamily: 'Cormorant Garamond',
  textShadow: '0 0 3px #122244',
  pb: '2.5rem'
});

const subheading = defineStyle({
  fontFamily: 'Quadrat Serial',
  fontWeight: '400',
  fontSize: '28px',
  textAlign: 'left',
  color: 'white'
});

const subheading2 = defineStyle({
  fontFamily: 'Quadrat Serial',
  fontWeight: '400',
  fontSize: '24px',
  textAlign: 'left',
  color: 'white'
});

const subheading3 = defineStyle({
  fontFamily: 'Quadrat Serial',
  fontWeight: '400',
  fontSize: '20px',
  textAlign: 'left',
  color: 'white'
});

export const headingTheme = defineStyleConfig({
  variants: { heading1, subheading, subheading2, subheading3 }
});
