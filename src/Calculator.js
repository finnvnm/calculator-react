import { useState } from 'react';
import { Box, Flex } from '@chakra-ui/layout';
import { Header, Display, Keypad } from './components';

export function Calculator() {
  const FUNCTION_KEYS = {
    allClear: 'AC',
    clear: 'C',
    plusMinus: '+/-',
    percent: '%',
    decimal: '.',
    equal: '=',
  };

  const OPERATOR_KEYS = {
    plus: '+',
    minus: '-',
    multiply: '*',
    divide: '/',
  };

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
    setCurrentState(CALCULATOR_STATES.initialized);
    setHistory([]);
    setResult('0');
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

  const handleClick = (value) => {
    switch (value) {
      case FUNCTION_KEYS.allClear:
        handleAllClear();
        break;
      case FUNCTION_KEYS.clear:
        handleClear();
        break;
      case FUNCTION_KEYS.plusMinus:
        handlePlusMinus();
        break;
      case FUNCTION_KEYS.percent:
        handlePercent();
        break;
      case FUNCTION_KEYS.decimal:
        handleDecimal();
        break;
      case FUNCTION_KEYS.equal:
        handleEqual();
        break;
      case OPERATOR_KEYS.plus:
      case OPERATOR_KEYS.minus:
      case OPERATOR_KEYS.multiply:
      case OPERATOR_KEYS.divide:
        handleOperator(value);
        break;
      default:
        handleNumber(value);
    }
  };

  return (
    <Flex align='center' h='100vh' px='2' mx='auto'>
      <Box bg='white' mx='auto' w='400px' rounded='sm' shadow='lg'>
        <Header />
        <Display history='&nbsp;' result={result} />
        <Keypad onClick={(value) => handleClick(value)} />
      </Box>
    </Flex>
  );
}
