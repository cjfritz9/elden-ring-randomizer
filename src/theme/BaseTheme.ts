import { extendTheme } from '@chakra-ui/react';
import { headingTheme } from './Heading';

export const theme = extendTheme({
  components: {
    Heading: headingTheme
  }
});
