import React from 'react';
import useState from 'react-usestateref';
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

  const [currentState, setCurrentState, currentStateRef] = useState(
    CALCULATOR_STATES.initialized
  );
  const [history, setHistory, historyRef] = useState([]);
  const [result, setResult, resultRef] = useState('0');

  const handleAllClear = () => {
    console.log('All Clear clicked');
    setCurrentState(CALCULATOR_STATES.initialized);
    setHistory([]);
    setResult('0');
  };

  const handleClear = () => {
    //789+56*1000
    console.log('Clear clicked');

    const lastHistoryElement = history[history.length - 1];
    console.log(`${lastHistoryElement}`);

    const operators = Object.values(OPERATOR_KEYS);

    setCurrentState(
      lastHistoryElement
        ? operators.includes(lastHistoryElement)
          ? CALCULATOR_STATES.operatorEntered
          : CALCULATOR_STATES.numberEntered
        : CALCULATOR_STATES.initialized
    );

    setHistory(lastHistoryElement ? history.slice(0, -1) : []);

    setResult(lastHistoryElement ? lastHistoryElement : '0');
  };

  const handlePlusMinus = () => {
    console.log('Plus/Minus clicked');

    if (currentStateRef.current !== CALCULATOR_STATES.operatorEntered) {
      const newResult = result.includes('-')
        ? result.replace('-', '')
        : `-${result}`;

      setResult(newResult);
    }
  };

  const handlePercent = () => {
    console.log('Percent clicked');
  };

  const handleDecimal = () => {
    console.log('Decimal clicked');

    const hasDecimal = resultRef.current.includes('.');

    if (hasDecimal) {
      return alert('Already has a decimal');
    }

    switch (currentState) {
      case CALCULATOR_STATES.initialized:
      case CALCULATOR_STATES.numberEntered:
        setResult(`${result}.`);
        break;
      case CALCULATOR_STATES.calculated:
        setHistory([]);
        setResult('0.');
        break;
      case CALCULATOR_STATES.operatorEntered:
        setHistory([...history, resultRef.current]);
        setResult('0.');
        break;
      default:
        console.log('Decimal clicked');
    }

    setCurrentState(
      resultRef.current === '0'
        ? CALCULATOR_STATES.initialized
        : CALCULATOR_STATES.numberEntered
    );
  };

  const handleEqual = () => {
    console.log('Equal clicked');
  };

  const handleOperator = (operator) => {
    console.log(`${operator} clicked`);

    switch (currentState) {
      case CALCULATOR_STATES.initialized:
      case CALCULATOR_STATES.numberEntered:
        setHistory([...history, resultRef.current]);
        break;
      case CALCULATOR_STATES.calculated:
        setHistory([resultRef.current]);
        break;
      case CALCULATOR_STATES.operatorEntered:
        break;
      default:
        console.log(operator);
    }

    setResult(operator);
    setCurrentState(CALCULATOR_STATES.operatorEntered);
  };

  const handleNumber = (number) => {
    console.log(`${number} clicked`);

    switch (currentState) {
      case CALCULATOR_STATES.initialized:
        setResult(number);
        break;
      case CALCULATOR_STATES.calculated:
        setHistory([]);
        setResult(number);
        break;
      case CALCULATOR_STATES.operatorEntered:
        setHistory([...history, resultRef.current]);
        setResult(number);
        break;
      case CALCULATOR_STATES.numberEntered:
        setResult(`${result}${number}`);
        break;
      default:
        console.log(currentState);
    }

    setCurrentState(
      resultRef.current === '0'
        ? CALCULATOR_STATES.initialized
        : CALCULATOR_STATES.numberEntered
    );
  };

  const handleClick = (value) => {
    console.log(`Before clicked`);
    console.log(`State: ${currentState} ${currentStateRef.current}`);
    console.log(`History: ${[history]} ${[historyRef.current]}`);
    console.log(`Result: ${result} ${resultRef.current}`);
    console.log('---');

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

    console.log('---');
    console.log(`After clicked`);
    console.log(`State: ${currentState} ${currentStateRef.current}`);
    console.log(`History: ${[history]} ${[historyRef.current]}`);
    console.log(`Result: ${result} ${resultRef.current}`);
    console.log('=====================================');
  };

  return (
    <Flex align='center' h='100vh' px='2' mx='auto'>
      <Box bg='white' mx='auto' w='400px' rounded='sm' shadow='lg'>
        <Header />
        <Display
          history={history
            .map((element) =>
              element.includes('-') && element.length > 1
                ? `(${element})`
                : `${element}`
            )
            .join(' ')}
          result={resultRef.current}
        />
        <Keypad onClick={(value) => handleClick(value)} />
      </Box>
    </Flex>
  );
}
