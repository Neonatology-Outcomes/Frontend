import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { toDos } from '../../constants/data/toDoMocks';
import { styles } from './styles';

function NurseDashboard() {
  const [toDoList, setToDoList] = useState([]);
  const [open, setOpen] = useState(false);
  const [notificationIndex, setNotificationIndex] = useState(null);
  const [selectedNotifications, setSelectedNotifications] = useState([]);

  const history = useHistory();

  const handleClickOpen = (notifications) => {
    setSelectedNotifications(notifications);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setToDoList(toDos);
  }, []);

  <IconButton style={styles.notificationButton} onClick={() => handleClickOpen(index)}>
    <NotificationsIcon />
  </IconButton>;

  //   <Dialog
  //     open={open}
  //     onClose={handleClose}
  //     aria-labelledby="alert-dialog-title"
  //     aria-describedby="alert-dialog-description"
  //   >
  //     <DialogTitle id="alert-dialog-title">Notifications</DialogTitle>
  //     <DialogContent>
  //       <DialogContentText id="alert-dialog-description">
  //         {notificationIndex !== null && `Sample notification for square ${notificationIndex + 1}`}
  //       </DialogContentText>
  //     </DialogContent>
  //     <DialogActions>
  //       <Button onClick={handleClose} color="primary" autoFocus>
  //         Close
  //       </Button>
  //     </DialogActions>
  //   </Dialog>;

  //   const data = [
  //     ['P19997642', 'DoB 28.2.23', 'Weight 2675g'],
  //     ['P19997645', 'DoB 2.3.23', 'Weight 2689g'],
  //     ['P19997645', 'DoB 4.3.23', 'Weight 2675g'],
  //     ['P19997645', 'DoB 2.3.23', 'Weight 2675g'],
  //     ['P19997645', 'DoB 2.3.23', 'Weight 2675g'],
  //     ['P19997645', 'DoB 2.3.23', 'Weight 2675g'],
  //     ['P19997645', 'DoB 2.3.23', 'Weight 2675g'],
  //     ['P19997645', 'DoB 2.3.23', 'Weight 2675g'],
  //     ['P19997645', 'DoB 2.3.23', 'Weight 2675g'],
  //   ];
  return (
    <Container
      maxWidth={false}
      disableGutters
      style={{ ...styles.container, ...styles.pageContainer }}
    >
      <Typography variant="h4" style={styles.title}>
        Nursing Dashboard
      </Typography>
      <div style={styles.flexContainer}>
        {toDos.map((item, index) => (
          <Paper
            key={index}
            style={styles.square}
            onClick={() => history.push(`/assessment/${item.uhid}`)}
          >
            <div style={styles.textContainer}>
              <Typography variant="h4" style={styles.title}>
                {item.uhid}
              </Typography>
              <Typography variant="h4" style={styles.title}>
                {item.dateofbirth}
              </Typography>
              <Typography variant="h4" style={styles.title}>
                Weight {item.birth_weight}
              </Typography>
            </div>
            <IconButton
              style={styles.notificationButton}
              onClick={(event) => {
                event.stopPropagation();
                handleClickOpen(item.notifications);
              }}
            >
              <Badge badgeContent={item.notifications.length} color="error" />
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
          {selectedNotifications.map((notification, index) => (
            <DialogContentText key={index} id={`alert-dialog-description-${index}`}>
              {notification}
            </DialogContentText>
          ))}
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
