import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { isEmpty, filter, values } from 'ramda';
import {
  Button,
  TextField,
  Typography,
  Box,
  Container,
  Paper,
  Grid,
  MenuItem,
} from '@mui/material';
import { styles } from './styles';
import { validateEmail } from '../../utils';
import { rolesList } from '../../constants/data/rulesMocks';
import { createUser } from '../../services/api';

function SignUp() {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    password: '',
    confirmpassword: '',
    email: '',
    username: '',
    role: '',
  });
  const [validationObject, setValidationObject] = useState({});
  const [signUpClicked, setSignUpClicked] = useState(false);

  const validateField = (field, value) => {
    if (field === 'email') {
      return !(validateEmail(value) && !isEmpty(value));
    }
    if (field === 'confirmpassword') {
      return value !== formValues.password;
    }
    return isEmpty(value);
  };

  const getValidationObject = () => {
    const fields = Object.keys(formValues);
    const errors = {};
    fields.forEach((field) => {
      errors[field] = validateField(field, formValues[field]);
    });
    return errors;
  };

  useEffect(() => {
    if (signUpClicked) {
      setValidationObject(getValidationObject());
    }
  }, [formValues, signUpClicked]);

  const handleChange = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
  };

  const validForm = () => filter((item) => item === true, values(validationObject)).length === 0;

  const handleSubmit = async () => {
    setSignUpClicked(true);

    if (validForm()) {
      const data = {
        username: formValues.username,
        password: formValues.password,
        email: formValues.email,
        firstname: formValues.firstname,
        lastname: formValues.lastname,
        role: formValues.role,
      };

      const userResponse = await createUser(data);
      console.log('user created object', userResponse);

      if (userResponse.ok) {
        history.push('/login');
      }
    }
  };

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
              error={signUpClicked && validationObject.firstname === true}
              style={styles.textField}
              fullWidth
              required
              value={formValues.firstname}
              onChange={(e) => handleChange('firstname', e.target.value)}
              id="firstname"
              label="First Name"
              type="text"
              autoComplete="firstname"
            />
            <TextField
              error={signUpClicked && validationObject.lastname === true}
              style={styles.textField}
              fullWidth
              required
              value={formValues.lastname}
              onChange={(e) => handleChange('lastname', e.target.value)}
              id="lastname"
              label="Last Name"
              type="text"
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
              error={signUpClicked && validationObject.password === true}
              style={styles.textField}
              fullWidth
              required
              value={formValues.password}
              onChange={(e) => handleChange('password', e.target.value)}
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              error={signUpClicked && validationObject.confirmpassword === true}
              style={styles.textField}
              fullWidth
              required
              value={formValues.confirmpassword}
              onChange={(e) => handleChange('confirmpassword', e.target.value)}
              id="confirmpassword"
              label="Confirm Password"
              type="password"
              autoComplete="confirm-password"
              helperText={
                formValues.confirmpassword === formValues.password ? '' : "Passwords don't match"
              }
            />
          </Box>

          <Box
            component="div"
            display="flex"
            justifyContent="space-between"
            style={styles.textFieldContainer}
          >
            <TextField
              error={signUpClicked && validationObject.email === true}
              style={styles.textField}
              fullWidth
              required
              value={formValues.email}
              onChange={(e) => handleChange('email', e.target.value)}
              id="email"
              label="Email"
              type="email"
              autoComplete="email"
            />
            <TextField
              error={signUpClicked && validationObject.username === true}
              style={styles.textField}
              fullWidth
              required
              value={formValues.username}
              onChange={(e) => handleChange('username', e.target.value)}
              id="username"
              label="Username"
              type="text"
              autoComplete="username"
            />
          </Box>

          <Box
            component="div"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            style={styles.textFieldContainer}
          >
            <TextField
              error={signUpClicked && validationObject.role === true}
              style={{ width: '100%', minWidth: '200px' }}
              required
              value={formValues.role}
              onChange={(e) => handleChange('role', e.target.value)}
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
            <Grid item xs={12} md={5} style={styles.signInContainer}>
              <Button fullWidth variant="contained" color="primary" href="/login">
                Sign In
              </Button>
            </Grid>
            <Grid item xs={12} md={5} style={styles.signUpContainer}>
              <Button fullWidth variant="contained" color="secondary" onClick={handleSubmit}>
                Sign Up
              </Button>
            </Grid>
          </Grid>
          {/* <Box mt={2}>
            <Link href="/forgotpassword" variant="body2" style={styles.forgotPassword}>
              Forgot password?
            </Link>
          </Box> */}
        </form>
      </Paper>
    </Container>
  );
}

export default SignUp;
