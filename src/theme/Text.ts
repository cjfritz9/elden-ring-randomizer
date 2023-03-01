import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const text = defineStyle({
  fontSize: '18px',
  fontWeight: '400',
  textAlign: 'left',
  cursor: 'default',
  fontFamily: 'Poppins',
  textShadow: '0 0 3px #122244'
});

const randomOption = defineStyle({
  color: 'white',
  fontSize: '20px'
});

export const textTheme = defineStyleConfig({
  baseStyle: text,
  variants: { randomOption }
});
