import { Box, Container, Input, Button, VStack, Text } from '@chakra-ui/react';
import { useState } from 'react';

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'You', timestamp: new Date().toLocaleTimeString() }]);
      setInputValue('');
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%" bg="gray.100" p={4} borderRadius="lg" overflowY="auto" height="70vh">
          {messages.map((message, index) => (
            <Box key={index} bg="blue.100" p={3} borderRadius="md" mb={2}>
              <Text fontSize="sm">{message.sender} - {message.timestamp}</Text>
              <Text fontSize="md">{message.text}</Text>
            </Box>
          ))}
        </Box>
        <Input placeholder="Type a message..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <Button colorScheme="blue" onClick={handleSendMessage}>Send</Button>
      </VStack>
    </Container>
  );
};

export default Index;