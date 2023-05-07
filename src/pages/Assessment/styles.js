export const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column', // Add this line for a vertical layout
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: 20,
    minWidth: 400,
    margin: 'auto',
  },
  textField: {
    flexGrow: 1,
    marginBottom: 8,
    marginRight: 8,
    width: '25%',
  },
  textFieldContainer: {
    marginTop: '1rem',
    display: 'flex',
  },
  box: {
    backgroundColor: 'red',
    borderRadius: '4px',
    padding: '8px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '50px',
    minWidth: '200px',
    cursor: 'pointer',
    flexBasis: '30%',
    textAlign: 'center',
    // marginBottom: '40px',
  },
  radioGroup: {
    marginTop: 16,
    marginLeft: 8,
    marginRight: 8,
  },
  topSection: {
    marginTop: 40,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '40px 10px',
    // marginBottom: '40px',
  },
  midSection: {
    flexGrow: 1,
    display: 'flex',
    // flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'left',
    width: '100%',
    paddingLeft: '20px',
    marginBottom: '40px',
    // marginTop: '40px',
  },
  bottomSection: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    // justifyContent: 'center',
    width: '100%',
    paddingLeft: '20px',
  },
  divider: {
    color: '#FDA228',
    marginBottom: '10px',
    width: '100%',
    borderWidth: 'medium',
    // height: '30px',
    // border-bottom-width: 'medium',
  },
};
