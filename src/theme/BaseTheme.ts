import { extendTheme } from '@chakra-ui/react';
import { headingTheme } from './Heading';
import { textTheme } from './Text';

export const theme = extendTheme({
  components: {
    Heading: headingTheme,
    Text: textTheme
  }
});
