import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  // FormLabel,
  // Radio,
  // RadioGroup,
  Grid,
  Checkbox,
  FormGroup,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { styles } from './styles';

function Assessment() {
  // Add your state and other logic here
  const [activeState, setActiveState] = useState([false, false, false]);
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());
  const [assessmentDate, setAssessmentDate] = useState(new Date());
  const [assessmentDateTime, setAssessmentDateTime] = useState(new Date());
  const [dayOfLife, setDayOfLife] = useState(1);
  const [actionDate, setActionDate] = useState(new Date().toISOString().slice(0, -8));
  const [actionRadio, setActionRadio] = useState('');
  const [checkboxes, setCheckboxes] = useState({
    firstSkinToSkin: false,
    scheduleLactationConsultant: false,
    firstOralFeeding: false,
  });

  const handleActiveClick = (index) => {
    const newActiveState = [...activeState];
    newActiveState[index] = !newActiveState[index];
    setActiveState(newActiveState);
  };

  const handleCheckboxChange = (event) => {
    setCheckboxes({
      ...checkboxes,
      [event.target.name]: event.target.checked,
    });
  };

  const updateDayOfLife = () => {
    const currentDate = new Date();
    const timeDifference = currentDate - assessmentDate;
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    setDayOfLife(dayDifference + 1); // Add 1 to the difference because the day of life starts from 1
  };

  // const handleChangeRadio = (event) => {
  //   setActionRadio(event.target.value);
  // };

  useEffect(() => {
    updateDayOfLife();
  }, [assessmentDate]);

  return (
    <Container style={styles.container}>
      {/* <Typography variant="h4" component="h1">
        Assessment
      </Typography> */}

      <Box container spacing={2} style={styles.topSection}>
        {['At Admission', 'In NICU', 'After Discharge'].map((box, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box
              onClick={() => handleActiveClick(index)}
              style={{
                ...styles.box,
                backgroundColor: activeState[index] ? 'green' : 'red',
              }}
            >
              <Typography variant="h6">
                {box}
                <br />
                <Typography>{activeState[index] ? 'Active' : 'Inactive'}</Typography>
              </Typography>
            </Box>
          </Grid>
        ))}
      </Box>
      {/* 
      <Box component="div" display="flex" justifyContent="center" style={styles.midSection}>
        <Typography variant="h5" component="h2">
          Assessment
        </Typography>
        <TextField
          style={styles.textField}
          label="Date and Time of Assessment"
          type="text"
          value={dateTime}
          readOnly
        />
        <TextField
          style={styles.textField}
          label="Day of Life"
          type="number"
          value={dayOfLife}
          onChange={(e) => setDayOfLife(e.target.value)}
        />
      </Box> */}
      <Divider style={styles.divider} />
      <Box
        component="div"
        display="flex"
        flexDirection="column"
        alignItems="left"
        style={styles.midSection}
      >
        <Typography variant="h5" component="h2" style={{ marginBottom: '20px' }}>
          Assessment
        </Typography>
        <Box
          component="div"
          display="flex"
          justifyContent="center"
          style={{ marginBottom: '30px' }}
        >
          {' '}
          {/* Add this line for spacing */}
          <TextField
            style={styles.textField}
            label="Date and Time of Action"
            type="datetime-local"
            InputLabelProps={{
              shrink: true,
            }}
            value={actionDate}
            onChange={(e) => setAssessmentDate(new Date(e.target.value))}
          />
          <TextField
            style={styles.textField}
            label="Day of Life"
            type="number"
            value={dayOfLife}
            readOnly
          />
        </Box>
      </Box>
      <Divider style={styles.divider} />

      <Box
        component="div"
        display="flex"
        flexDirection="column"
        alignItems="center"
        style={styles.bottomSection}
      >
        <Typography variant="h5" component="h2" style={{ marginBottom: '20px' }}>
          Action
        </Typography>
        <TextField
          style={styles.textField}
          label="Date and Time of Action"
          type="datetime-local"
          InputLabelProps={{
            shrink: true,
          }}
          value={actionDate}
          onChange={(e) => setActionDate(e.target.value)}
        />
        <FormControl component="fieldset">
          {/* <FormLabel component="legend">Actions</FormLabel> */}
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes.firstSkinToSkin}
                  onChange={handleCheckboxChange}
                  name="firstSkinToSkin"
                />
              }
              label="Provide first skin-to-skin care within 14 hours of birth"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes.scheduleLactationConsultant}
                  onChange={handleCheckboxChange}
                  name="scheduleLactationConsultant"
                />
              }
              label="Schedule a lactation consultant"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxes.firstOralFeeding}
                  onChange={handleCheckboxChange}
                  name="firstOralFeeding"
                />
              }
              label="First oral feeding attempt"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Container>
  );
}

export default Assessment;
