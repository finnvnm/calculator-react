import { Image } from '@chakra-ui/image';
import { Flex, Heading } from '@chakra-ui/layout';
import React from 'react';

export function Header() {
  return (
    <Flex align='center' justify='space-between' w='100%' h='16'>
      <Heading
        as='h1'
        size='xs'
        px='4'
        py='2'
        my='5'
        ml='5'
        color='white'
        bg='blue.600'
        rounded='full'
      >
        Calculator
      </Heading>
      <Image src='/img/light.svg' py='1' my='5' mr='5' />
    </Flex>
  );
}
