import React, { useState } from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Form = () => {
  const [label, setLabel] = useState('');
  const [content, setContent] = useState('');

  const handleChange = (stateFunc, e) => {
    let text = e.target.value;
    stateFunc(text);
  };

  const setLocalStorage = () => {
    localStorage.setItem(label, content);
  };

  return (
    <div>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'>
        <TextField
          id='standard-basic'
          label='Label'
          variant='standard'
          onChange={(e) => {
            handleChange(setLabel, e);
          }}
        />
        <TextField
          id='outlined-basic'
          label='Text Content'
          variant='outlined'
          onChange={(e) => {
            handleChange(setContent, e);
          }}
        />
      </Box>
      <div className='submit'>
        <Button variant='contained' onClick={setLocalStorage}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Form;
