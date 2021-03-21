import { Button } from '@chakra-ui/button';
import React from 'react';

export function NumberKey({ numKey }) {
  return (
    <Button
      fontSize='4xl'
      color='gray.600'
      bg='white'
      w='16'
      h='16'
      align='center'
      rounded='full'
    >
      {numKey}
    </Button>
  );
}
