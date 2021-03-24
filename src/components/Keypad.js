import React from 'react';
import { useState } from 'react';
import { Grid } from '@chakra-ui/layout';
import { Key } from './Key';

export function Keypad() {
  const CALCULATOR_STATES = {
    operatorEntered: 'operatorEntered',
    numberEntered: 'numberEntered',
    initialized: 'initialized',
    calculated: 'calculated',
  };

  const [currentState, setCurrentState] = useState(
    CALCULATOR_STATES.initialized
  );
  const [history, setHistory] = useState([]);
  const [result, setResult] = useState('0');

  const handleAllClear = () => {
    console.log('All Clear clicked');
  };

  const handleClear = () => {
    console.log('Clear clicked');
  };

  const handlePlusMinus = () => {
    console.log('Plus/Minus clicked');
  };

  const handlePercent = () => {
    console.log('Percent clicked');
  };

  const handleDecimal = () => {
    console.log('Decimal clicked');
  };

  const handleEqual = () => {
    console.log('Equal clicked');
  };

  const handleOperator = (operator) => {
    console.log(`${operator} clicked`);
  };

  const handleNumber = (number) => {
    console.log(`${number} clicked`);
  };

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
        onClick={() => handleAllClear()}
      />
      <Key
        value={'C'}
        color='white'
        bg='gray.300'
        onClick={() => handleClear()}
      />
      <Key
        value={'+/-'}
        color='white'
        bg='gray.300'
        onClick={() => handlePlusMinus()}
      />
      <Key
        value={'%'}
        color='white'
        bg='gray.300'
        onClick={() => handlePercent()}
      />
      <Key value={'7'} onClick={(number) => handleNumber(number)} />
      <Key value={'8'} onClick={(number) => handleNumber(number)} />
      <Key value={'9'} onClick={(number) => handleNumber(number)} />
      <Key
        value={'/'}
        color='white'
        bg='blue.300'
        onClick={(operator) => handleOperator(operator)}
      />
      <Key value={'4'} onClick={(number) => handleNumber(number)} />
      <Key value={'5'} onClick={(number) => handleNumber(number)} />
      <Key value={'6'} onClick={(number) => handleNumber(number)} />
      <Key
        value={'*'}
        color='white'
        bg='blue.300'
        onClick={(operator) => handleOperator(operator)}
      />
      <Key value={'1'} onClick={(number) => handleNumber(number)} />
      <Key value={'2'} onClick={(number) => handleNumber(number)} />
      <Key value={'3'} onClick={(number) => handleNumber(number)} />
      <Key
        value={'-'}
        color='white'
        bg='blue.300'
        onClick={(operator) => handleOperator(operator)}
      />
      <Key value={'0'} onClick={(number) => handleNumber(number)} />
      <Key value={'.'} onClick={() => handleDecimal()} />
      <Key
        value={'='}
        color='white'
        bg='blue.500'
        onClick={() => handleEqual()}
      />
      <Key
        value={'+'}
        color='white'
        bg='blue.300'
        onClick={(operator) => handleOperator(operator)}
      />
    </Grid>
  );
}
