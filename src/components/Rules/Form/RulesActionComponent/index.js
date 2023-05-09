import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { filter } from 'ramda';
import { Box, TextField, IconButton, MenuItem, Typography } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import {
  conditionsList,
  categories,
  dataFieldConditionMapping,
} from '../../../../constants/data/rulesMocks';
import { generateRandomInteger } from '../../../../utils';
import Condition from '../../../Condition';
import { styles } from '../styles';

function RulesActionComponent({ bundle }) {
  const [category, setCategory] = useState(1);
  const [conditions, setConditions] = useState([]);

  const dataFields = [...dataFieldConditionMapping(category)];

  const bundles = ['At Admission', 'In NICU', 'Post Discharge'];

  const [dataField, setDataField] = useState(
    dataFields.length > 0 ? dataFields[0].value : undefined,
  );

  const getConditionObject = () => {
    const { label } = dataFields.find((dF) => dF.value === dataField);
    console.log('label', label);

    return {
      id: generateRandomInteger(200, 1000),
      conditionOperator: 'AND',
      dataField: {
        value: dataField,
        label,
      },
      operators: {
        value: 1,
        label: '<=',
      },
      value: '14',
      units: {
        value: '1',
        label: 'Seconds',
      },
    };
  };

  const createCondition = () => {
    getConditionObject();
    const newCondition = conditions.concat(getConditionObject());
    setConditions(newCondition);
  };

  const handleRemoveCondition = (id) => {
    console.log('id', id);
    // const index = findIndex()
    const newConditions = filter((c) => c.id !== id, conditions);
    console.log(newConditions);
    setConditions(newConditions);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeDataField = (event) => {
    setDataField(event.target.value);
  };

  useEffect(() => {
    const conditionsWithDataField = [
      ...conditionsList.map((cL) => ({
        ...cL,
        dataFields,
      })),
    ];
    setConditions(conditionsWithDataField);
  }, []);

  const getActionUI = () => {
    console.log(bundle);
    console.log(bundles[0]);
    switch (bundle) {
      case bundles[0]:
        return (
          <>
            <Box
              component="form"
              mt="2rem"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <Box component="div">
                <TextField
                  id="category"
                  select
                  label="Category (label)"
                  value={category}
                  onChange={handleChangeCategory}
                  variant="standard"
                >
                  {categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                {dataFields.length > 0 ? (
                  <TextField
                    id="data-field"
                    select
                    label="Data Field"
                    onChange={handleChangeDataField}
                    value={dataField}
                    variant="standard"
                  >
                    {dataFields.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                ) : null}

                <IconButton
                  color="primary"
                  aria-label="add new condition"
                  sx={{ mt: '0.5rem', ml: '1rem' }}
                  onClick={createCondition}
                >
                  <AddCircleOutline fontSize="large" />
                </IconButton>
              </Box>
            </Box>
            <Box component="section" style={styles.conditionsSectionContainer}>
              <Box style={{ padding: 10 }}>
                <Typography variant="h6">Then</Typography>
              </Box>
              {conditions.map((condition) => (
                <Box key={condition.id}>
                  <Condition
                    condition={condition}
                    removeCondition={handleRemoveCondition}
                    bundle={bundle}
                  />
                </Box>
              ))}
            </Box>
          </>
        );
      case bundles[1]:
        return (
          <>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <Box component="div">
                <TextField
                  id="category"
                  select
                  label="Category (label)"
                  value={category}
                  onChange={handleChangeCategory}
                  variant="standard"
                >
                  {categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                {dataFields.length > 0 ? (
                  <TextField
                    id="data-field"
                    select
                    label="Data Field"
                    onChange={handleChangeDataField}
                    value={dataField}
                    variant="standard"
                  >
                    {dataFields.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                ) : null}

                <IconButton
                  color="primary"
                  aria-label="add new condition"
                  sx={{ mt: '0.5rem', ml: '1rem' }}
                  onClick={createCondition}
                >
                  <AddCircleOutline fontSize="large" />
                </IconButton>
              </Box>
            </Box>
            <Box component="section" style={styles.conditionsSectionContainer}>
              <Box style={{ padding: 10 }}>
                <Typography variant="h5">Then</Typography>
              </Box>
              {conditions.map((condition) => (
                <Box key={condition.id}>
                  <Condition condition={condition} removeCondition={handleRemoveCondition} />
                </Box>
              ))}
            </Box>
          </>
        );
      // …
      case bundles[2]:
        return (
          <>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <Box component="div">
                <TextField
                  id="category"
                  select
                  label="Category (label)"
                  value={category}
                  onChange={handleChangeCategory}
                  variant="standard"
                >
                  {categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                {dataFields.length > 0 ? (
                  <TextField
                    id="data-field"
                    select
                    label="Data Field"
                    onChange={handleChangeDataField}
                    value={dataField}
                    variant="standard"
                  >
                    {dataFields.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                ) : null}

                <IconButton
                  color="primary"
                  aria-label="add new condition"
                  sx={{ mt: '0.5rem', ml: '1rem' }}
                  onClick={createCondition}
                >
                  <AddCircleOutline fontSize="large" />
                </IconButton>
              </Box>
            </Box>
            <Box component="section" style={styles.conditionsSectionContainer}>
              <Box style={{ padding: 10 }}>
                <Typography variant="h5">Then</Typography>
              </Box>
              {conditions.map((condition) => (
                <Box key={condition.id}>
                  <Condition
                    condition={condition}
                    removeCondition={handleRemoveCondition}
                    bundle={bundle}
                  />
                </Box>
              ))}
            </Box>
          </>
        );
      default:
        return null;
    }
  };

  return getActionUI();
}

RulesActionComponent.propTypes = {
  bundle: PropTypes.string.isRequired,
};

export default RulesActionComponent;
