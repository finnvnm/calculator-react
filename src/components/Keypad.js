import React from 'react';
import { Grid } from '@chakra-ui/layout';
import { FunctionKey } from './FunctionKey';
import { NumberKey } from './NumberKey';
import { OperatorKey } from './OperatorKey';

export function Keypad() {
  return (
    <Grid
      templateColumns='repeat(4, minmax(0, 1fr))'
      templateRows='repeat(5, minmax(0, 1fr))'
      gap='4'
      p='5'
      justifyItems='center'
    >
      <FunctionKey fnKey={'AC'} />
      <FunctionKey fnKey={'C'} />
      <FunctionKey fnKey={'+/-'} />
      <FunctionKey fnKey={'%'} />
      <NumberKey numKey={'7'} />
      <NumberKey numKey={'8'} />
      <NumberKey numKey={'9'} />
      <OperatorKey opKey={'/'} />
      <NumberKey numKey={'4'} />
      <NumberKey numKey={'5'} />
      <NumberKey numKey={'6'} />
      <OperatorKey opKey={'*'} />
      <NumberKey numKey={'1'} />
      <NumberKey numKey={'2'} />
      <NumberKey numKey={'3'} />
      <OperatorKey opKey={'-'} />
      <NumberKey numKey={'0'} />
      <FunctionKey fnKey={'.'} color='black' bg='white' />
      <FunctionKey fnKey={'='} bg='blue.500' />
      <OperatorKey opKey={'+'} />
    </Grid>
  );
}
