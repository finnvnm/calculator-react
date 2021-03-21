import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/layout';
import { Calculator } from './Calculator';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Box
        bgImage="url('/img/background.svg')"
        bgColor='gray.400'
        bgPosition='center'
        bgRepeat='no-repeat'
        bgSize='cover'
        position='fixed'
        top='0'
        left='0'
        w='100vw'
        h='100vh'
        zIndex='-1'
      />
      <Calculator />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
