/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useHistory } from 'react-router-dom';
import { getDashboard } from '../../services/api';
// import { toDos } from '../../constants/data/toDoMocks';
import { styles } from './styles';

function NurseDashboard() {
  const [toDoList, setToDoList] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedNotifications, setSelectedNotifications] = useState([]);

  const history = useHistory();

  const handleClickOpen = (notifications) => {
    setSelectedNotifications(notifications);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   setToDoList(toDos);
  // }, []);

  useEffect(() => {
    const fetchToDos = async () => {
      const toDos = await getDashboard();
      if (toDos.ok) {
        setToDoList(toDos.data);
      } else {
        console.error(toDos.error);
      }
    };

    fetchToDos();
  }, []);

  return toDoList.length > 0 ? (
    <Container
      maxWidth={false}
      disableGutters
      style={{ ...styles.container, ...styles.pageContainer }}
    >
      <Typography variant="h4" style={styles.title}>
        Nursing Dashboard
      </Typography>
      <div style={styles.flexContainer}>
        {toDoList.map((item, index) => (
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
            {item.tasks.length > 0 ? (
              <IconButton
                style={styles.notificationButton}
                onClick={(event) => {
                  event.stopPropagation();
                  handleClickOpen(item.tasks);
                }}
                size="1rem"
              >
                <Badge badgeContent={item.tasks.length} color="error" />
                <NotificationsIcon />
              </IconButton>
            ) : null}
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
  ) : (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 68px)',
        }}
      >
        <CircularProgress size="8rem" />
      </Box>
    </Box>
  );
}
export default NurseDashboard;
