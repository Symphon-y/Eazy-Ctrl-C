import React, { useContext } from 'react';
import '../App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Form = () => {
  return (
    <div>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete='off'>
        <TextField id='standard-basic' label='Label' variant='standard' />
        <TextField
          id='outlined-basic'
          label='Text Content'
          variant='outlined'
        />
      </Box>
      <div className='submit'>
        <Button variant='contained'>Submit</Button>
      </div>
    </div>
  );
};

export default Form;
