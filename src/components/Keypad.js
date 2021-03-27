import React from 'react';
import { Grid } from '@chakra-ui/layout';
import { Key } from './Key';

export function Keypad({ onClick }) {
  return (
    <Grid
      templateColumns='repeat(4, minmax(0, 1fr))'
      templateRows='repeat(5, minmax(0, 1fr))'
      gap='4'
      p='5'
      justifyItems='center'
    >
      <Key
        value={'AC'}
        color='white'
        bg='gray.300'
        onClick={() => onClick('AC')}
      />
      <Key
        value={'C'}
        color='white'
        bg='gray.300'
        onClick={() => onClick('C')}
      />
      <Key
        value={'+/-'}
        color='white'
        bg='gray.300'
        onClick={() => onClick('+/-')}
      />
      <Key
        value={'%'}
        color='white'
        bg='gray.300'
        onClick={() => onClick('%')}
      />
      <Key value={'7'} onClick={() => onClick('7')} />
      <Key value={'8'} onClick={() => onClick('8')} />
      <Key value={'9'} onClick={() => onClick('9')} />
      <Key
        value={'/'}
        color='white'
        bg='blue.300'
        onClick={() => onClick('/')}
      />
      <Key value={'4'} onClick={() => onClick('4')} />
      <Key value={'5'} onClick={() => onClick('5')} />
      <Key value={'6'} onClick={() => onClick('6')} />
      <Key
        value={'*'}
        color='white'
        bg='blue.300'
        onClick={() => onClick('*')}
      />
      <Key value={'1'} onClick={() => onClick('1')} />
      <Key value={'2'} onClick={() => onClick('2')} />
      <Key value={'3'} onClick={() => onClick('3')} />
      <Key
        value={'-'}
        color='white'
        bg='blue.300'
        onClick={() => onClick('-')}
      />
      <Key value={'0'} onClick={() => onClick('0')} />
      <Key value={'.'} onClick={() => onClick('.')} />
      <Key
        value={'='}
        color='white'
        bg='blue.500'
        onClick={() => onClick('=')}
      />
      <Key
        value={'+'}
        color='white'
        bg='blue.300'
        onClick={() => onClick('+')}
      />
    </Grid>
  );
}
