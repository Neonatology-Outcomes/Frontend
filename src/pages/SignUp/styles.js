export const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: 20,
    minWidth: 400, // Optional: Add a minimum width if needed
    margin: 'auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  textField: {
    flexGrow: 1,
    marginBottom: 8,
    marginRight: 8,
    width: '48%', 
    '& .MuiOutlinedInput-input': {
      padding: '10px 14px',
   },
  },
  textFieldContainer: {
    marginTop: '1rem',
    display: 'flex'
  },
  buttons: {
    marginTop: '24px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  signUpContainer: {
    marginTop: '1rem',
  },
  forgotPassword: {
    textDecoration: 'none'
  },
};
