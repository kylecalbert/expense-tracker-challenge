import React from 'react';
import { Box, CardContent, Typography } from '@mui/material';
import {Header} from './components/header';
import Balance from './components/balance';
import './App.css';

function App() {
  const transactions = [
    { amount: 100 },
    { amount: 50 }
  ]
  return (
    <div className="App">
        <Header/>
      <Box>
        <Balance transactions = {transactions}/>
      </Box>
  </div>
);
}

export default App;
