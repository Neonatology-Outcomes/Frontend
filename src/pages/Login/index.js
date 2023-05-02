import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextField, Typography, Link, Box, Container, Paper, Grid } from '@mui/material';
import { login } from '../../services/api';
import { styles } from './styles';

function LoginPage() {

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [incorrectCredentials, setIncorrectCredentials] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleLogin = async () => {
    const data = {
      username,
      password,
    }

    const userResponse = await login(data);

    if (userResponse.ok) {
      history.push('/rules');
    } else {
      setIncorrectCredentials(true);
    }

    console.log('user login object', userResponse)
  };

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const getWindowStyleSize = () =>
    windowSize[0] >= 680 ? '80px' : '10px';

  // console.log(windowSize[0])

  return (
    <Container style={styles.container}>
      <Paper style={styles.paper(getWindowStyleSize())} elevation={3} xs={12} md={6}>
        <Typography variant="h4" component="h1">
          Login
        </Typography>
        <form style={styles.form}>
          <TextField
            style={styles.textField}
            fullWidth
            required
            onChange={handleChangeUsername}
            value={username}
            id="username"
            label="Username"
            type="text"
            autoComplete="username"
            error={incorrectCredentials}
          />
          <TextField
            style={styles.textField}
            fullWidth
            required
            onChange={handleChangePassword}
            value={password}
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            error={incorrectCredentials}
            helperText={incorrectCredentials ? 'Invalid credentials' : ''}
          />
          <Grid container style={styles.buttons}>
            <Grid item xs={12} md={5}>
              <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>
                Sign In
              </Button>
            </Grid>
            <Grid item xs={12} md={5}>
              <Button fullWidth variant="contained" color="secondary" href="/signup">
                Sign Up
              </Button>
            </Grid>
          </Grid>
          <Box mt={2}>
            <Link href="#" variant="body2" style={styles.forgotPassword}>
              Forgot password?
            </Link>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default LoginPage;
