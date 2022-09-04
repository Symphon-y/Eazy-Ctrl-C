import React, { useState } from 'react';
import { Button, Box, ButtonGroup } from '@mui/material';
import '../App.css';
import CloseIcon from '@mui/icons-material/Close';

const Copy = () => {
  const [keys, setKeys] = useState(Object.keys(localStorage).sort());

  const removeFromStorage = (event, label) => {
    localStorage.removeItem(label);
    setKeys(Object.keys(localStorage).sort());
    event.preventDefault();
  };

  const storageItems = () => {
    return keys.map((item) => {
      return (
        <span className='button_container'>
          <ButtonGroup variant='outlined' aria-label='split button'>
            <Button
              variant='outlined'
              sx={{ color: '#234650', borderColor: '#234650' }}
              onClick={() => {
                navigator.clipboard.writeText(localStorage.getItem(item));
              }}>
              {item}
            </Button>
            <Button
              size='small'
              variant='outlined'
              sx={{ color: '#234650', borderColor: '#234650' }}
              onClick={(e) => {
                removeFromStorage(e, item);
              }}>
              <CloseIcon />
            </Button>
          </ButtonGroup>
        </span>
      );
    });
  };
  return (
    <div className='list_container'>
      <h3 className='list_header'>List</h3>
      <hr className='divider'></hr>
      {storageItems()}
    </div>
  );
};

export default Copy;
