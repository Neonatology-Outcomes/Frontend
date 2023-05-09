import React, { useEffect, useState } from 'react';
import { isNil } from 'ramda';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { getToDos } from '../../services/api';
// import { toDos } from '../../constants/data/toDoMocks';
import { styles } from './styles';
import { generateRandomInteger } from '../../utils';

function ToDo() {
  const [toDoList, setToDoList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  // const [sortBy, setSortBy] = useState('');

  // useEffect(() => {
  //   setToDoList(toDos);
  // }, []);

  useEffect(() => {
    const fetchToDos = async () => {
      const toDos = await getToDos();
      if (toDos.ok) {
        setToDoList(toDos.data);
      } else {
        console.error(toDos.error);
      }
    };

    fetchToDos();
  }, []);

  console.log('**** toDos from backend: ', toDoList);

  const handleOptionChange = (event, newOption) => {
    setSelectedOption(newOption);
  };

  console.log('selectedOption', selectedOption);

  const getTaskTitle = (tasks) => `${tasks[0]} ${tasks[1] || ''} ${tasks[2] || ''}`;

  console.log(selectedOption);

  return toDoList.length > 0 ? (
    <Container
      component="section"
      maxWidth="md"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(80vh - 64px)',
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={12} md={9}>
          <Autocomplete
            style={{ marginBottom: '5rem' }}
            value={selectedOption}
            fullWidth
            onChange={handleOptionChange}
            options={toDoList}
            getOptionLabel={(option) => getTaskTitle(option.tasks)}
            isOptionEqualToValue={(option, value) => option.uhid === value.uhid}
            renderOption={(props, option) => (
              <li
                {...props}
                key={generateRandomInteger(100, 100000)}
                style={styles.searchList(option.value)}
              >
                <div>
                  <div style={styles.strong}>{getTaskTitle(option.tasks)}</div>
                  <div>{option.uhid}</div>
                  <div>{option.dateofbirth}</div>
                  <div>Weight {option.birth_weight} g</div>
                </div>
              </li>
            )}
            renderInput={(params) => (
              <TextField {...params} label="To Do List" variant="outlined" />
            )}
          />

          {!isNil(selectedOption) ? (
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <>
                  <Typography variant="body1" component="header" style={styles.strong}>
                    {getTaskTitle(selectedOption.tasks)}
                  </Typography>
                  <Typography color="text.secondary">{selectedOption.uhid}</Typography>
                  <Typography variant="body2">{selectedOption.dateofbirth}</Typography>
                  <Typography variant="body3">{selectedOption.birth_weight}</Typography>
                </>
              </CardContent>
            </Card>
          ) : null}
        </Grid>
      </Grid>
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

export default ToDo;
