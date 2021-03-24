import { Text } from '@chakra-ui/layout';
import React from 'react';

export function History({ value }) {
  return (
    <Text mr='6' align='right' fontSize='3xl'>
      {value}
    </Text>
  );
}
