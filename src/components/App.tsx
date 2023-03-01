import React from 'react';
import { Container } from '@chakra-ui/react';
import Randomizer from './Randomizer';

import background from '../assets/er-bg.webp';

const App: React.FC = () => {
  return (
    <Container
      className='App'
      minW='100dvw'
      minH='100dvh'
      bgImg={background}
      bgColor='#111E2E'
      bgAttachment='fixed'
    >
      <Randomizer />
    </Container>
  );
};

export default App;
