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
  // Grid,
  Checkbox,
  FormGroup,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { styles } from './styles';
import BundleSelector from '../../components/BundleSelector';
import { getVariant, getVariantStyle } from '../../utils';

function Assessment() {
  // Add your state and other logic here
  // const [activeState, setActiveState] = useState([false, false, false]);
  // const [dateTime, setDateTime] = useState(new Date().toLocaleString());
  const [assessmentDate] = useState(new Date());
  // const [assessmentDateTime, setAssessmentDateTime] = useState(new Date());
  const [dayOfLife, setDayOfLife] = useState(1);
  const [actionDate, setActionDate] = useState(new Date().toISOString().slice(0, -8));
  const [actionDateTime, setActionDateTime] = useState(new Date().toISOString().slice(0, -8));
  const [selectedBundle, setSelectedBundle] = useState('At Admission');
  // const [actionRadio, setActionRadio] = useState('');
  const [checkboxes, setCheckboxes] = useState({
    firstSkinToSkin: false,
    scheduleLactationConsultant: false,
    firstOralFeeding: false,
  });

  const handleCheckboxChange = (event) => {
    setCheckboxes({
      ...checkboxes,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSetSelectedBundle = (bundle) => () => {
    setSelectedBundle(bundle);
  };

  // const handleSetAssessmentDate = (event) => {
  //   setAssessmentDate(event.target.value);
  // };

  const updateDayOfLife = () => {
    const currentDate = new Date();
    const timeDifference = currentDate - assessmentDate;
    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    setDayOfLife(dayDifference); // Add 1 to the difference because the day of life starts from 1
  };

  // const handleChangeRadio = (event) => {
  //   setActionRadio(event.target.value);
  // };

  useEffect(() => {
    updateDayOfLife();
  }, [assessmentDate]);

  // useEffect(() => {
  //   updateDayOfLife();
  // }, [assessmentDateTime]);

  return (
    <Container style={styles.container}>
      {/* <Typography variant="h4" component="h1">
        Assessment
      </Typography> */}

      <BundleSelector
        getVariant={getVariant}
        getVariantStyle={getVariantStyle}
        handleSetSelectedBundle={handleSetSelectedBundle}
        selectedBundle={selectedBundle}
      />
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
            label="Date and Time of Assessment"
            type="datetime-local"
            InputLabelProps={{
              shrink: true,
            }}
            value={actionDate}
            onChange={(e) => setActionDate(new Date(e.target.value))}
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
          value={actionDateTime}
          onChange={(e) => setActionDateTime(e.target.value)}
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
