import { Box, Flex } from '@chakra-ui/layout';
import { Header, Display, Keypad } from './components';

export function Calculator() {
  return (
    <Flex align='center' h='100vh' px='2' mx='auto'>
      <Box bg='white' mx='auto' w='400px' rounded='sm' shadow='lg'>
        <Header />
        <Display />
        <Keypad />
      </Box>
    </Flex>
  );
}
