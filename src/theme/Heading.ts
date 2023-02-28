import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const heading = defineStyle({
  fontSize: '56px',
  fontWeight: '400',
  textAlign: 'center',
  fontFamily: 'Cormorant Garamond',
  textShadow: '0 0 3px #122244'
});

const subheading = defineStyle({
  fontSize: '24px'
});

export const headingTheme = defineStyleConfig({
  baseStyle: heading,
  variants: { subheading }
});
