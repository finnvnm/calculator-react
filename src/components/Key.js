import { Button } from '@chakra-ui/button';
import React from 'react';

export function Key({ value, color = 'gray.600', bg = 'white', onClick }) {
  return (
    <Button
      fontSize='3xl'
      color={color}
      bg={bg}
      w='16'
      h='16'
      align='center'
      rounded='full'
      onClick={() => onClick(value)}
    >
      {value}
    </Button>
  );
}
