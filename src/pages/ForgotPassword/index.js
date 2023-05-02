import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { isEmpty } from 'ramda';
import { filter, values } from 'ramda';
import { Button, TextField, Typography, Link, Box, Container, Paper, Grid } from '@mui/material'
import { styles } from './styles';
import { sleep, validateEmail } from '../../utils';

function ForgotPassword() {

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const history = useHistory();
  const [email, setEmail] = useState(''); 
  const [validationObject, setValidationObject] = useState({});
  const [continueClicked, setContinueClicked] = useState(false);  
  const [signUpClicked, setSignUpClicked] = useState(false);

  const getValidationObject = () => (
    { 
      email: isEmpty(email), 
    }
  ); 

  useEffect(() => {
    setValidationObject(getValidationObject);
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);





    // const userResponse = await login(data);

    // if (userResponse.ok) {
    //   history.push('/rules');
    // } else {
    //   setIncorrectCredentials(true);
    // }

//     console.log('user login object', userResponse)
//   };

  
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


const handleContinueClick = () => {
  setContinueClicked(true);
  const emailError = !validateEmail(email);
  setValidationObject({ ...validationObject, email: emailError });
};
 


  const getWindowStyleSize = () =>
    windowSize[0] >= 680 ? '80px' : '10px';

  // console.log(windowSize[0])

  return (
    <Container style={styles.container}>
      <Paper style={styles.paper(getWindowStyleSize())} elevation={3} xs={12} md={6}>
        <Typography variant="h5" component="h1" style={{ fontWeight: 500, marginBottom: 8 }}>
          Reset your password
        </Typography>
        <Typography variant="body1" component="p" style={{ marginBottom: 24 }}>
          Enter the email address associated with your account, and we'll send you a link to reset your password.
        </Typography>
        <form style={styles.form}>
            <TextField
              error={continueClicked && validationObject['email']}
              style={styles.textField}
              fullWidth
              required
              value={email}
              onChange={handleOnChangeEmail}
              id="email"
              label="Email"
              type="email"
              autoComplete="email" 
              helperText={continueClicked && validationObject['email'] ? "Invalid email format" : ""}
            /> 
          <Grid container style={styles.buttons}>
            <Grid item xs={12} >
              <Button fullWidth variant="contained" color="primary" onClick={handleContinueClick}>
                Continue
              </Button>
            </Grid> 
          </Grid>
          <Box mt={2}>
            <Link href="/login" variant="body2" style={styles.forgotPassword}>
              Return to sign in
            </Link>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default ForgotPassword;
