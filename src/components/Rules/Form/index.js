import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({ open, setOpen }) {
  const [isOpen, setIsOpen] = useState(open);

  const handleSetOpen = (openStateParam) => () => {
    setOpen(openStateParam)
  }

  useEffect(() => {
    setIsOpen(open)
  }, [open]);

  return (
      <Dialog open={isOpen} onClose={handleSetOpen(false)}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSetOpen(false)}>Cancel</Button>
          <Button onClick={handleSetOpen(false)}>Subscribe</Button>
        </DialogActions>
      </Dialog>
  );
}