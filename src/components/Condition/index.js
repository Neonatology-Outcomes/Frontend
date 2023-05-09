import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { Grid, IconButton, Switch, Typography } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import FormControlLabel from '@mui/material/FormControlLabel';
import { unitsList, operators, conditionOperatorList } from '../../constants/data/rulesMocks';

function Condition({ condition, removeCondition, bundle }) {
  const [dataField, setDataField] = useState(condition.dataField);
  const [operator, setOperator] = useState(condition.operators.value);
  const [value, setValue] = useState(condition.value);
  const [units, setUnits] = useState(condition.units.value);
  const [conditionOperator, setConditionOperator] = useState(condition.conditionOperator);
  const [fromValue, setFromValue] = useState(condition.fromValue);
  const [toValue, setToValue] = useState(condition.toValue);
  const [every, setEvery] = useState(condition.every);

  const handleRemove = () => {
    removeCondition(condition.id);
  };

  const handleChangeOperator = (event) => {
    setOperator(event.target.value);
  };

  const handleChangeValue = () => {
    setValue(!value);
  };

  const handleChangeFromValue = (event) => {
    setFromValue(event.target.value);
  };

  const handleChangeToValue = (event) => {
    setToValue(event.target.value);
  };

  const handleChangeEvery = (event) => {
    setEvery(event.target.value);
  };

  const handleChangeUnits = (event) => {
    setUnits(event.target.value);
  };

  const handleChangeDataField = (event) => {
    setDataField(event.target.value);
  };

  const handleChangeConditionOperator = (event) => {
    setConditionOperator(event.target.value);
  };

  const renderValue = () => {
    if (bundle !== 'Post Discharge') {
      return (
        <Grid alignItems="center" mt="0.5rem">
          <Typography
            variant="label"
            component="div"
            fontSize="0.75rem"
            fontWeight="400"
            color="rgba(0, 0, 0, 0.6);"
            fontFamily="'Roboto','Helvetica','Arial',sans-serif"
            textAlign="center"
          >
            Value
          </Typography>
          <Grid container alignItems="center">
            <Typography variant="subtitle2" component="div" sx={{ mr: '1.5rem' }}>
              NO
            </Typography>
            <FormControlLabel
              control={<Switch checked={value} onChange={handleChangeValue} />}
              label=""
              labelPlacement="end"
            />
            <Typography variant="subtitle2" component="div">
              YES
            </Typography>
          </Grid>
        </Grid>
      );
    }
    return null;
  };

  const getValueComponent = () =>
    operator === 4 && bundle !== 'Post Discharge' ? (
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '8ch' },
          width: 150,
          mt: '0.5rem',
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={5}>
            <TextField
              fullWidth
              size="small"
              label="From"
              value={fromValue}
              onChange={handleChangeFromValue}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              sx={{
                '& .MuiTextField-root': { m: 1, width: '8ch' },
              }}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              fullWidth
              size="small"
              label="To"
              value={toValue}
              onChange={handleChangeToValue}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              sx={{
                '& .MuiTextField-root': { m: 1, width: '8ch' },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    ) : (
      renderValue()
    );

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 200, width: '100%' }}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '20ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField
            id="data-field"
            label="Data Field"
            disabled
            onChange={handleChangeDataField}
            value={dataField.label}
            variant="standard"
          />

          {bundle === 'Post Discharge' ? (
            <TextField
              type="number"
              fullWidth
              size="small"
              label="Every"
              value={every}
              onChange={handleChangeEvery}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              style={{ marginTop: 2 }}
              sx={{
                '& .MuiTextField-root': { m: 1, width: '4ch' },
              }}
            />
          ) : null}

          {bundle !== 'Post Discharge' ? (
            <TextField
              id="operator"
              select
              label="Operator"
              value={operator}
              onChange={handleChangeOperator}
              variant="standard"
            >
              {operators.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          ) : null}

          <Box component="div">{getValueComponent()}</Box>

          <TextField
            id="units"
            select
            label="Units"
            value={units}
            onChange={handleChangeUnits}
            variant="standard"
          >
            {unitsList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <IconButton aria-label="remove" onClick={handleRemove} style={{ marginTop: '1rem' }}>
            <HighlightOffIcon color="primary" fontSize="large" />
          </IconButton>

          <TextField
            id="condition_operator"
            select
            value={conditionOperator}
            onChange={handleChangeConditionOperator}
            variant="standard"
            style={{ width: '70px', marginTop: '1.5rem' }}
          >
            {conditionOperatorList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
    </FormControl>
  );
}

Condition.propTypes = {
  bundle: PropTypes.string.isRequired,
  condition: PropTypes.array.isRequired,
  removeCondition: PropTypes.func.isRequired,
};

export default Condition;
