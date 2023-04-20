import React, { useState } from 'react';
import { isEmpty } from 'ramda';
import { Button, TextField, Typography, Link, Box, Container, Paper, Grid } from '@mui/material';
import { styles } from './styles';

const SignUp = () => {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleOnChangeFirstName = (event) => {
    setFirstName(event.target.value)
  } 

  const handleOnChangeLastName = (event) => {
    setLastName(event.target.value)
  }  

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value)
  }  

  const handleOnChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleOnChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const validateForm = () => !isEmpty(firstname) && !isEmpty(lastname)
  && !isEmpty(password) && !isEmpty(confirmpassword) && !isEmpty(email) ;

  const handleOnChangeSignUp = () => {
    console.log(validateForm());
  }

  return (
    <Container style={styles.container}>
      <Paper style={styles.paper} elevation={3}>
        <Typography variant="h4" component="h1">
          Sign Up
        </Typography>
        <form style={styles.form}>
          <Box
            component="div"
            display="flex"
            justifyContent="space-between"
            style={styles.textFieldContainer}
          >
            <TextField  
              style={styles.textField}
              fullWidth
              required
              id="firstname"
              label="First Name"  
              type="text"
              autoComplete="firstname"
              value={firstname}
              onChange={handleOnChangeFirstName}
            />
            <TextField
              style={styles.textField}
              fullWidth
              required
              id="lastname"
              label="Last Name"
              type="lastname"
              autoComplete="lastname"
              value={lastname}
              onChange={handleOnChangeLastName}
            />
          </Box>
          <Box
            component="div"
            display="flex"
            justifyContent="space-between"
            style={styles.textFieldContainer}
          >
            <TextField
              style={styles.textField}
              fullWidth
              required
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={handleOnChangePassword}
            />
            <TextField
              style={styles.textField}
              fullWidth
              required
              id="confirmpassword"
              label="Confirm Password"
              type="password"
              autoComplete="confirm-password"
              value={confirmpassword}
              onChange={handleOnChangeConfirmPassword}
            />
          </Box>
          <Box
            component="div"
            display="flex"
            justifyContent="space-between"
            style={styles.textFieldContainer}
          >
            <TextField  
              style={styles.textField}
              fullWidth
              required
              id="email"
              label="Email"  
              type="email"
              autoComplete="email"
              value={email}
              onChange={handleOnChangeEmail}
            />
            <TextField  
              style={styles.textField}
              fullWidth
              required
              id="role"
              label="Role"  
              type="text"
              autoComplete="role"
            />
          </Box>
          
          <Grid container style={styles.buttons}>
            <Grid item xs={12} md={5}>
              <Button fullWidth variant="contained" color="primary">
                Sign In
              </Button>
            </Grid>
            <Grid item xs={12} md={5} style={styles.signUpContainer}>
              <Button
                fullWidth 
                variant="contained"
                color="secondary"
                onClick={handleOnChangeSignUp}
              >
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
  )
}
  
    


export default SignUp;
