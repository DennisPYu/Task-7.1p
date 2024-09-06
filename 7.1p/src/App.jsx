import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/Signup';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/signup" element={<Layout><SignUp /></Layout>} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
