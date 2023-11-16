import React from 'react';
import './App.css';
import { Box } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Header from './components/view/header/header';
import Home from './pages';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Box
        sx={{
          background: '#282c34',
          height: '100vh',
        }}
        className='App'
      >
        <Header />
        <Home />
      </Box>
    </QueryClientProvider>
  );
}

export default App;
