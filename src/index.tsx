import ReactDOM from 'react-dom/client';
import App from './components/App';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/BaseTheme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
);
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
