import logo from './logo.svg';
import './App.css';
import Form from './components/Form.jsx';
import Copy from './components/Copy.jsx';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

//import styled from '@emotion/styled';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [page, setPage] = useState('Copy');
  const changePage = () => {
    page === 'Copy' ? setPage('New Entry') : setPage('Copy');
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className='App'>
        <h1 className='Header'>Ez Copy</h1>
        <Stack className='nav' spacing={2} direction='row'>
          <Button variant='outlined' onClick={changePage}>
            Copy
          </Button>
          <Button variant='outlined' onClick={changePage}>
            New Entry
          </Button>
        </Stack>
        {page === 'Copy' ? <Copy /> : <Form />}
      </div>
    </ThemeProvider>
  );
}

export default App;
