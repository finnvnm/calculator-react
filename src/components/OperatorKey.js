import { Button } from '@chakra-ui/button';
import React from 'react';

export function OperatorKey({ opKey }) {
  return (
    <Button
      fontSize='3xl'
      color='white'
      bg='blue.200'
      w='16'
      h='16'
      align='center'
      rounded='full'
    >
      {opKey}
    </Button>
  );
}
