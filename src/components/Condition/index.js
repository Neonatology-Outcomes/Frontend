import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Condition = ({ condition, removeCondition }) => {
	const [dataField, setDataField] = useState(condition.dataFields.value);
	const [operator, setOperator] = useState(condition.operators.value);
	const [value, setValue] = useState(condition.value);
	const [units, setUnits] = useState(condition.units.value);

	const operators = [
		{
			value: '1',
			label: '<=',
		},
		{
			value: '2',
			label: '==',
		},
		{
			value: '3',
			label: '>=',
		},
	];

	const dataFields = [
		{
			value: '1',
			label: 'Day of Life',
		},
		{
			value: '2',
			label: 'Option B',
		},
		{
			value: '3',
			label: 'Option C',
		},
		{
			value: '4',
			label: 'Option D',
		},
	];

	const unitsList = [
		{
			value: '1',
			label: 'Minutes',
		},
		{
			value: '2',
			label: 'Hours',
		},
		{
			value: '3',
			label: 'Days',
		},
		{
			value: '4',
			label: 'Weeks',
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
						defaultValue="1"
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

					<IconButton aria-label="remove" onClick={handleRemove}>
						<HighlightOffIcon color="primary" fontSize="large" />
					</IconButton>

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
