import { Flex } from '@chakra-ui/layout';
import React from 'react';
import { History } from './History';
import { Result } from './Result';

export function Display() {
  return (
    <Flex bg='gray.200' direction='column' w='full' justify='center' h='44'>
      <History />
      <Result />
    </Flex>
  );
}
