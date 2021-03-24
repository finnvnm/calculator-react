import { Text } from '@chakra-ui/layout';
import React from 'react';

export function Result({ value }) {
  return (
    <Text mr='6' fontSize='6xl' align='right' color='gray.600'>
      {value}
    </Text>
  );
}
