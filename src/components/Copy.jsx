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
          <ButtonGroup variant='contained' aria-label='split button'>
            <Button
              variant='contained'
              onClick={() => {
                navigator.clipboard.writeText(localStorage.getItem(item));
              }}>
              {item}
            </Button>
            <Button
              size='small'
              variant='contained'
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
  return <div className='list_container'>{storageItems()}</div>;
};

export default Copy;
