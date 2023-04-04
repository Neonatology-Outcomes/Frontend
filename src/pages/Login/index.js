import React from 'react';
import { Button, TextField, Typography, Link, Box, Container, Paper, Grid } from '@mui/material';
import { styles } from './styles';

function LoginPage() {
  return (
    <Container style={styles.container}>
      <Paper style={styles.paper} elevation={3}>
        <Typography variant="h4" component="h1">
          Login
        </Typography>
        <form style={styles.form}>
          <TextField
            style={styles.textField}
            fullWidth
            required
            id="username"
            label="Username"
            type="text"
            autoComplete="username"
          />
          <TextField
            style={styles.textField}
            fullWidth
            required
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Grid container style={styles.buttons}>
            <Grid item xs={12} md={5}>
              <Button fullWidth variant="contained" color="primary">
                Sign In
              </Button>
            </Grid>
            <Grid item xs={12} md={5}>
              <Button fullWidth variant="contained" color="secondary">
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
