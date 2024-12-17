import React from 'react';
import './ActionButtons.css'; // Import CSS
import { Box, IconButton } from '@mui/material';
import { Add, Remove, DragIndicator } from '@mui/icons-material';

const ActionButtons = ({ onAdd, onRemove }) => {
  return (
    <Box className="action-buttons">
      <IconButton className="icon-button" onClick={onAdd}>
        <Add />
      </IconButton>
      <IconButton className="icon-button" onClick={onRemove}>
        <Remove />
      </IconButton>
      <IconButton className="icon-button">
        <DragIndicator />
      </IconButton>
    </Box>
  );
};

export default ActionButtons;
