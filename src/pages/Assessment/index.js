import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { find, isNil } from 'ramda';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from '@mui/material';
import NumbersIcon from '@mui/icons-material/Numbers';
import { differenceInDays } from 'date-fns';
import { styles } from './styles';
import { getDateTimeFormat, getVariant, getVariantStyle } from '../../utils';
import { getDashboard } from '../../services/api';
// import { toDos } from '../../constants/data/toDoMocks';
function Assessment({ match }) {
  const { params } = match;

  const [selectedTask, setSelectedTask] = useState(null);
  const [assessmentDateTime, setAssessmentDateTime] = useState('');
  const [dayOfLife, setDayOfLife] = useState(1);
  const [actionDateTime, setActionDateTime] = useState(new Date().toISOString().slice(0, -8));
  const [selectedBundle, setSelectedBundle] = useState('At Admission');
  // const [checkboxes, setCheckboxes] = useState({
  //   firstSkinToSkin: false,
  //   scheduleLactationConsultant: false,
  //   firstOralFeeding: false,
  // });

  useEffect(() => {
    const { uhid } = params;
    const fetchToDos = async () => {
      const toDos = await getDashboard();
      if (toDos.ok) {
        const task = find((t) => t.uhid === uhid, toDos.data);
        setSelectedTask(task);
        const dateTimeFormat = getDateTimeFormat(task.dateofbirth);
        console.log('dateTimeFormat', dateTimeFormat);
        setAssessmentDateTime(dateTimeFormat);
      } else {
        console.error(toDos.error);
      }
    };

    fetchToDos();
  }, []);

  console.log(selectedTask);

  // const handleCheckboxChange = (event) => {
  //   setCheckboxes({
  //     ...checkboxes,
  //     [event.target.name]: event.target.checked,
  //   });
  // };

  const handleSetSelectedBundle = (bundle) => () => {
    setSelectedBundle(bundle);
  };

  const handleSetAssessmentDateTime = (event) => {
    console.log(event.target.value);
    setAssessmentDateTime(event.target.value);
  };

  const handleSetActionDateTime = (event) => {
    console.log(event.target.value);
    setActionDateTime(event.target.value);
    console.log(selectedTask);
  };

  const updateDayOfLife = () => {
    const currentDate = new Date();
    const parsedAssessmentDate = new Date(assessmentDateTime);
    const dayDifference = differenceInDays(currentDate, parsedAssessmentDate);
    setDayOfLife(dayDifference + 1);
  };

  useEffect(() => {
    updateDayOfLife();
  }, [assessmentDateTime]);

  return !isNil(selectedTask) ? (
    <Container style={styles.container}>
      <Box
        component="div"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
        sx={{ width: '90%', marginTop: '3rem', marginBottom: '3rem' }}
        xs={12}
      >
        <Box component="div" flexDirection="column" xs={12} md={4}>
          <Button
            variant={getVariant(selectedBundle === 'At Admission')}
            style={{ ...getVariantStyle(selectedBundle === 'At Admission'), fontSize: '1.2rem' }}
            onClick={handleSetSelectedBundle('At Admission')}
          >
            At Admission
          </Button>
        </Box>
        <Box component="div" flexDirection="column" xs={12} md={4}>
          <Button
            variant={getVariant(selectedBundle === 'In NICU')}
            style={{ ...getVariantStyle(selectedBundle === 'In NICU'), fontSize: '1.2rem' }}
            onClick={handleSetSelectedBundle('In NICU')}
          >
            In NICU
          </Button>
        </Box>
        <Box component="div" flexDirection="column" xs={12} md={4}>
          <Button
            variant={getVariant(selectedBundle === 'Post Discharge')}
            style={{ ...getVariantStyle(selectedBundle === 'Post Discharge'), fontSize: '1.2rem' }}
            onClick={handleSetSelectedBundle('Post Discharge')}
          >
            Post Discharge
          </Button>
        </Box>
      </Box>
      <Divider style={styles.divider} />
      <Box
        component="div"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="left"
        style={styles.midSection}
      >
        <Typography variant="h5" component="h2" style={{ marginBottom: '20px' }}>
          Assessment
        </Typography>
        <Box
          component="div"
          display="flex"
          justifyContent="flex-start"
          style={{ marginBottom: '30px', width: '100%' }}
        >
          <TextField
            disabled
            style={styles.textField}
            label="Date and Time of Assessment"
            type="datetime-local"
            InputLabelProps={{
              shrink: true,
            }}
            value={assessmentDateTime}
            onChange={handleSetAssessmentDateTime}
          />
          <TextField
            disabled
            style={styles.textField}
            label="Day of Life"
            type="number"
            value={dayOfLife || ''}
            readOnly
          />
          <Box
            component="div"
            display="flex"
            flexDirection="row"
            width="100%"
            justifyContent="center"
            xs={6}
            md={4}
          >
            <Typography
              sx={{ display: 'flex', alignItems: 'center', fontSize: '1.5rem' }}
              color="text.primary"
            >
              <NumbersIcon sx={{ mr: 0.5 }} />
              {selectedTask.uhid}
            </Typography>
          </Box>
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
          onChange={handleSetActionDateTime}
        />
        <FormControl component="fieldset">
          <FormGroup>
            {selectedTask.tasks.map((t) => (
              <FormControlLabel
                control={
                  <Checkbox
                  // checked={checkboxes.firstOralFeeding}
                  // onChange={handleCheckboxChange}
                  // name="firstOralFeeding"
                  />
                }
                label={t}
              />
            ))}
          </FormGroup>
        </FormControl>
        <Divider style={styles.divider} />

        <Box component="div" display="flex" justifyContent="center" paddingBottom="2rem">
          <Button variant="contained" color="primary" disabled>
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Container>
  ) : (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 68px)',
        }}
      >
        <CircularProgress size="8rem" />
      </Box>
    </Box>
  );
}

Assessment.propTypes = {
  match: PropTypes.object.isRequired,
};

export default withRouter(Assessment);
