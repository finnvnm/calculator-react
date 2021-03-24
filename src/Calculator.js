// import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import { Header, Display, Keypad } from './components';

export function Calculator() {
  // const FUNCTION_KEYS = {
  //   allClear: 'AC',
  //   clear: 'C',
  //   plusMinus: '+/-',
  //   percent: '%'
  // }

  // const CALCULATOR_STATES = {
  //   operatorEntered: 'operatorEntered',
  //   numberEntered: 'numberEntered',
  //   initialized: 'initialized',
  //   calculated: 'calculated',
  // };

  // const [currentState, setCurrentState] = useState(
  //   CALCULATOR_STATES.initialized
  // );
  // const [history, setHistory] = useState([]);
  // const [result, setResult] = useState('0');

  // const handleAllClear = () => {
  //   console.log('All Clear clicked');
  // };

  // const handleClear = () => {
  //   console.log('Clear clicked');
  // };

  // const handlePlusMinus = () => {
  //   console.log('Plus/Minus clicked');
  // };

  // const handlePercent = () => {
  //   console.log('Percent clicked');
  // };

  // const handleDecimal = () => {
  //   console.log('Decimal clicked');
  // };

  // const handleEqual = () => {
  //   console.log('Equal clicked');
  // };

  // const handleOperator = (operator) => {
  //   console.log(`${operator} clicked`);
  // };

  // const handleNumber = (number) => {
  //   console.log(`${number} clicked`);
  // };

  const handleClick = (value) => {
    console.log(`${value} clicked`);
    // if (value === 'AC') {
    //   handleAllClear();
    // }
  };

  return (
    <Flex align='center' h='100vh' px='2' mx='auto'>
      <Box bg='white' mx='auto' w='400px' rounded='sm' shadow='lg'>
        <Header />
        <Display />
        <Keypad onClick={(value) => handleClick(value)} />
      </Box>
    </Flex>
  );
}
