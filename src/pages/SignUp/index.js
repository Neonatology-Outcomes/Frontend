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
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');

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

  const handleOnChangeUsername = (event) => {
    setUsername(event.target.value)
  }

  const handleOnChangeRole = (event) => {
    setRole(event.target.value)
  }

  const validateForm = () => !isEmpty(firstname) && !isEmpty(lastname)
  && !isEmpty(password) && !isEmpty(confirmpassword) && !isEmpty(email) ;

  const handleOnChangeSignUp = () => {
    console.log(validateForm());
  }

  const rolesList = [
    {
      value: 1,
      label: 'Administrator',
    },
    {
      value: 2,
      label: 'Nurse',
    }
  ];

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
              value={firstname}
              onChange={handleOnChangeFirstName}
              id="firstname"
              label="First Name"  
              type="text"
              autoComplete="firstname" 
            />
            <TextField
              style={styles.textField}
              fullWidth
              required
              value={lastname}
              onChange={handleOnChangeLastName}
              id="lastname"
              label="Last Name"
              type="lastname"
              autoComplete="lastname" 
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
              value={password}
              onChange={handleOnChangePassword}
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password" 
            />
            <TextField
              style={styles.textField}
              fullWidth
              required
              value={confirmpassword}
              onChange={handleOnChangeConfirmPassword}
              id="confirmpassword"
              label="Confirm Password"
              type="password"
              autoComplete="confirm-password"              
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
              value={email}
              onChange={handleOnChangeEmail}
              id="email"
              label="Email"  
              type="email"
              autoComplete="email"
            />
            <TextField  
              style={styles.textField}
              fullWidth
              required
              value={username}
              onChange={handleOnChangeUsername}
              id="username"
              label="Username"  
              type="text"
              autoComplete="Username"
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
                value={role}
                onChange={handleOnChangeRole}
                id="role"
                label="Role"  
                type="text"
                autoComplete="role"
            >
                {rolesList.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
            </TextField>
                
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
