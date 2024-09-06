import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Utils/Firebase';
import { Box, Input, Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import '../Login.css'; 
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);
      navigate('/');
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <Box className="login-form" p={4}>
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" colorScheme="blue" className="login-button">
          Login
        </Button>
        {errorMessage && <Text className="error-message">{errorMessage}</Text>}
      </form>
      <Button className="sign-up-button" colorScheme="blue" onClick={() => navigate('/signup')}>
        Sign Up
      </Button>
    </Box>
  );
}