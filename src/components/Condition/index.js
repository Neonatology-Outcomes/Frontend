import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { unitsList } from '../../constants/data/rulesMocks';

const Condition = ({ condition, removeCondition }) => {
	const [dataField, setDataField] = useState(condition.dataField);
	const [operator, setOperator] = useState(condition.operators.value);
	const [value, setValue] = useState(condition.value);
	const [units, setUnits] = useState(condition.units.value);
	const [conditionOperator, setConditionOperator] = useState(condition.conditionOperator);

	const operators = [
		{
			value: 1,
			label: '<=',
		},
		{
			value: 2,
			label: '==',
		},
		{
			value: 3,
			label: '>=',
		},
		{
			value: 4,
			label: 'In Between'
		},
	];

	
	
	const conditionOperatorList = [
		{
			value: 'AND',
			label: 'AND',
		},
		{
			value: 'OR',
			label: 'OR',
		},
	];

	const handleRemove =  () => {
		removeCondition(condition.id);
	}



	const handleChangeOperator = (event) => {
		setOperator(event.target.value);
	}

	const handleChangeValue = (event) => {
		setValue(event.target.value);
	}

	const handleChangeUnits = (event) => {
		setUnits(event.target.value);
	}

	const handleChangeDataField = (event) => {
		setDataField(event.target.value);
	}

	const handleChangeConditionOperator = (event) => {
		setConditionOperator(event.target.value);
	}

	return (
		<FormControl variant="standard" sx={{ m: 1, minWidth: 200, width: '90%' }}>
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


					<TextField
						id="value"
						type="text"
						label="Value"
						value={value}
						onChange={handleChangeValue}
						variant="standard"
					/>

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
						onChange={handleChangeUnits}
						variant="standard"
						style={{ width: '70px', marginTop: '1.5rem' }}
					>
						{conditionOperatorList.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>

					{/* <TextField
                        id="data-field"
                        select
                        label="Date Field"
                        onChange={handleChangeDataField}
                        value={dataField}
                        // helperText="Please select your currency"
                        variant="standard"
                    >
                        {dataFields.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField> */}
				</Box>
			</Box>

		</FormControl>
	)
};

export default Condition;
