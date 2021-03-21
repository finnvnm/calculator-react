import { Button } from '@chakra-ui/button';
import React from 'react';

export function FunctionKey({ fnKey, color = 'white', bg = 'gray.300' }) {
  return (
    <Button
      fontSize='3xl'
      color={color}
      bg={bg}
      w='16'
      h='16'
      align='center'
      rounded='full'
    >
      {fnKey}
    </Button>
  );
}
