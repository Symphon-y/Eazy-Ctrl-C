import React, { useState } from 'react';
import { Button, Box } from '@mui/material';

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
        <Box component='span' sx={{ p: 2 }}>
          <Button variant='contained'>{item}</Button>
          <Button
            variant='contained'
            onClick={(e) => {
              removeFromStorage(e, item);
            }}>
            Delete
          </Button>
        </Box>
      );
    });
  };
  return <div>{storageItems()}</div>;
};

export default Copy;
