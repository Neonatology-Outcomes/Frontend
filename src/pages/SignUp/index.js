import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { isEmpty } from 'ramda';
import { Button, TextField, Typography, Link, Box, Container, Paper, Grid, MenuItem } from '@mui/material';
import { filter, values } from 'ramda';
import { styles } from './styles';
import { sleep, validateEmail } from '../../utils';
import { rolesList } from '../../constants/data/rulesMocks';
import { createUser } from '../../services/api';


const SignUp = () => {
  const history = useHistory();
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [validationObject, setValidationObject] = useState({});
  const [signUpClicked, setSignUpClicked] = useState(false);

  const getValidationObject = () => (
    {
      firstname: isEmpty(firstname),
      lastname: isEmpty(lastname),
      password: isEmpty(password),
      email: isEmpty(email),
      username: isEmpty(username),
      role: isEmpty(role),
    }
  );

  useEffect(() => {
    setValidationObject(getValidationObject);
  }, [])



  const handleOnChangeFirstName = (event) => {
    setFirstName(event.target.value)
    const firstnameError = { ...validationObject, firstname: isEmpty(event.target.value) }
    if (signUpClicked) {
      setValidationObject(firstnameError)
    }
    // setValidationObject(signUpClicked && firstnameError)

  }

  const handleOnChangeLastName = (event) => {
    setLastName(event.target.value)
    const lastnameError = { ...validationObject, lastname: isEmpty(event.target.value) }
    if (signUpClicked) {
      setValidationObject(lastnameError)
    }
  }

  const handleOnChangePassword = (event) => {
    setPassword(event.target.value)
    const passwordError = { ...validationObject, password: isEmpty(event.target.value) }
    if (signUpClicked) {
      setValidationObject(passwordError)
    }
  }

  const handleOnChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value)
    const confirmPasswordError = { ...validationObject, confirmpassword: isEmpty(event.target.value) }
    if (signUpClicked) {
      setValidationObject(confirmPasswordError)
    }
  }

  const handleOnChangeEmail = ({ target }) => {
    const { value } = target;
    setEmail(value)
    // console.log('validate', validateEmail(value))
    // console.log('fuuuuuuck', !(!isEmpty(value) && validateEmail(value)))
    const emailError = {
      ...validationObject,
      // email: isEmpty(value) && (isEmpty(value) || validateEmail(value))
      email: !(!isEmpty(value) && validateEmail(value))

    }
    if (signUpClicked) {
      setValidationObject(emailError)
    }
  }

  const handleOnChangeUsername = (event) => {
    setUsername(event.target.value)
    const usernameError = { ...validationObject, username: isEmpty(event.target.value) }
    if (signUpClicked) {
      setValidationObject(usernameError)
    }
  }

  const handleOnChangeRole = (event) => {
    setRole(event.target.value)
    const roleError = { ...validationObject, role: isEmpty(event.target.value) }
    if (signUpClicked) {
      setValidationObject(roleError)
    }
  }

  // const validateForm = () => !isEmpty(firstname) && !isEmpty(lastname)
  //   && !isEmpty(password) && !isEmpty(confirmpassword) && !isEmpty(email);

  const validForm = () => filter((item) => item === true, values(validationObject)).length === 0

  console.log(values(validationObject))
  console.log(filter((item) => item === false, values(validationObject)))

  const handleOnChangeSignUp = async () => {
    // console.log(validateForm());
    setSignUpClicked(true)

    sleep(500);

    if (validForm()) {
      const data = {
        username,
        password,
        email,
        firstname,
        lastname,
        role,
      };
  
      const userResponse = await createUser(data);
      console.log('user created object', userResponse)

      if (userResponse.ok) {
        history.push('/login');
      }
    }
    // submit()
  }

  // const submit = () => {
  //   const data = {
  //     firstname,
  //     lastname,
  //     password,
  //     email,
  //     username,
  //     role
  //   }
  // }

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
              error={signUpClicked && validationObject['firstname']}
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
              error={signUpClicked && validationObject['lastname']}
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
              error={signUpClicked && validationObject['password']}
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
              error={signUpClicked && validationObject['confirmpassword']}
              style={styles.textField}
              fullWidth
              required
              value={confirmpassword}
              onChange={handleOnChangeConfirmPassword}
              id="confirmpassword"
              label="Confirm Password"
              type="password"
              autoComplete="confirm-password"
              helperText={confirmpassword === password ? "" : "Password don't match"}
            />
          </Box>
          <Box
            component="div"
            display="flex"
            justifyContent="space-between"
            style={styles.textFieldContainer}
          >
            <TextField
              error={signUpClicked && validationObject['email']}
              style={styles.textField}
              fullWidth
              required
              value={email}
              onChange={handleOnChangeEmail}
              id="email"
              label="Email"
              type="email"
              autoComplete="email"
            // TODO
            // helperText={!handleOnChangeEmail.emailError ? "" :"Incorrect email format"} 
            />
            <TextField
              error={signUpClicked && validationObject['username']}
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
            flexDirection="row"
            justifyContent="center"
            // xs={12}
            style={styles.textFieldContainer}
          >
            <TextField
              error={signUpClicked && validationObject['role']}
              style={{ width: '100%', minWidth: '200px' }}
              required
              value={role}
              onChange={handleOnChangeRole}
              id="role"
              label="Role"
              select
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
            <Grid item xs={12} md={5} style={styles.signUpContainer}>
              <Button fullWidth variant="contained" color="primary" href="#login">
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
