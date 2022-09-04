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
        <img src='../Assets/headerLogo3.png' className='Header' alt='header' />
        <Stack className='nav' spacing={2} direction='row'>
          <Button
            variant='outlined'
            sx={{ color: '#234650', borderColor: '#234650' }}
            onClick={changePage}>
            {page === 'Copy' ? 'New Entry' : 'Home'}
          </Button>
        </Stack>
        {page === 'Copy' ? <Copy /> : <Form />}
        <span className='footer_container'>
          <Button
            variant='outlined'
            sx={{ color: '#234650', borderColor: '#234650' }}>
            <a
              href='https://www.buymeacoffee.com/RhysCreates'
              className='footer_btn'
              target='_blank'
              rel='noopener noreferrer'>
              Donate
            </a>
          </Button>
          <Button
            variant='outlined'
            sx={{ color: '#234650', borderColor: '#234650' }}>
            <a
              href='https://twitter.com/Travis_Redden'
              className='footer_btn'
              target='_blank'
              rel='noopener noreferrer'>
              Twitter
            </a>
          </Button>
          <Button
            variant='outlined'
            sx={{ color: '#234650', borderColor: '#234650' }}>
            <a
              href='https://github.com/Symphon-y/ezapply'
              className='footer_btn'
              target='_blank'
              rel='noopener noreferrer'>
              Github
            </a>
          </Button>
        </span>
      </div>
    </ThemeProvider>
  );
}

export default App;
