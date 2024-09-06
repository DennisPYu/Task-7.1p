import { Box, Flex, Input, Button, Heading, Spacer } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <Box as="header" bg="#333" color="white" p="10px 20px">
      <Flex align="center">
        <Heading size="lg">DEV@Deakin</Heading>
        <Spacer />
        <Flex align="center">
          <Input
            type="text"
            placeholder="Search..."
            size="md"
            borderRadius="md"
            border="2px solid white"
            _hover={{ border: "2px solid #3182ce" }}
            _focus={{ border: "2px solid #3182ce" }}
          />
          <Button colorScheme="blue" ml={2}>
            <FontAwesomeIcon icon={faSearchengin} />
          </Button>
        </Flex>
        <Spacer />
        <Flex align="center">
          <Button colorScheme="blue" mr={4}>Post</Button>
          <Button colorScheme="blue" onClick={() => navigate('/login')}>
            Login
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
