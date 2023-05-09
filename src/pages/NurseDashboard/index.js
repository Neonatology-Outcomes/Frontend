import React, { useState } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { toDos } from '../../constants/data/toDoMocks';
import { styles } from './styles';

function NurseDashboard() {
  const [open, setOpen] = useState(false);
  const [notificationIndex, setNotificationIndex] = useState(null);
  const handleClickOpen = (index) => {
    setNotificationIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  <IconButton style={styles.notificationButton} onClick={() => handleClickOpen(index)}>
    <NotificationsIcon />
  </IconButton>;

  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">Notifications</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {notificationIndex !== null && `Sample notification for square ${notificationIndex + 1}`}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary" autoFocus>
        Close
      </Button>
    </DialogActions>
  </Dialog>;

  const data = [
    ['P19997642', 'DoB 28.2.23', 'Weight 2675g'],
    ['P19997645', 'DoB 2.3.23', 'Weight 2689g'],
    ['P19997645', 'DoB 4.3.23', 'Weight 2675g'],
    ['P19997645', 'DoB 2.3.23', 'Weight 2675g'],
    ['P19997645', 'DoB 2.3.23', 'Weight 2675g'],
    ['P19997645', 'DoB 2.3.23', 'Weight 2675g'],
    ['P19997645', 'DoB 2.3.23', 'Weight 2675g'],
    ['P19997645', 'DoB 2.3.23', 'Weight 2675g'],
    ['P19997645', 'DoB 2.3.23', 'Weight 2675g'],
  ];
  return (
    <Container maxWidth={false} disableGutters style={styles.container}>
      <div style={styles.flexContainer}>
        {data.map((item, index) => (
          <Paper key={index} style={styles.square}>
            <div style={styles.textContainer}>
              <Typography variant="body1">{item[0]}</Typography>
              <Typography variant="body1">{item[1]}</Typography>
              <Typography variant="body1">{item[2]}</Typography>
            </div>
            <IconButton style={styles.notificationButton} onClick={() => handleClickOpen(index)}>
              <NotificationsIcon />
            </IconButton>
          </Paper>
        ))}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Notifications</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {notificationIndex !== null &&
              `Sample notification for square ${notificationIndex + 1}`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
export default NurseDashboard;
