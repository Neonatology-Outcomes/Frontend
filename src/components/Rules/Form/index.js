import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import {findIndex, filter } from 'ramda';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Box } from '@mui/system';
import Condition from '../../Condition';
import { AddCircleOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { conditionsList, categories, dataFieldConditionMapping } from '../../../constants/data/rulesMocks';
import { generateRandomInteger } from '../../../utils';

export default function FormDialog({ open, setOpen }) {
	const [isOpen, setIsOpen] = useState(open);
	const [ruleName, setRuleName] = useState('Human Milk Consumption');
	const [category, setCategory] = useState(1);
	const dataFields = [ ...dataFieldConditionMapping(category) ];
	// TODO
	// console.log('*****', dataFields)
	// console.log('----', dataFields.length > 0 ? dataFields[0].value : undefined)
	const [dataField, setDataField] = useState(dataFields.length > 0 ? dataFields[0].value : undefined);
	const [conditions, setConditions] = useState([]);

	// const [tmpConditions, setTmpConditions] = useState([]);

	useEffect(() => {
		const conditionsWithDataField = [
			...conditionsList.map((cL) => ({
				...cL,
				dataFields,
			})),
			
		];
		// console.log(conditionsWithDataField);
		setConditions(conditionsWithDataField);
	}, []);

	

	const getConditionObject = () => {
		const { label } = dataFields.find(((dF) => dF.value === dataField));
		console.log('label', label)


		return {
			id: generateRandomInteger(200, 1000),
			conditionOperator: 'AND',
			dataField: {
				value: dataField,
				label,
			},
			operators: {
				value: '1',
				label: '<=',
			},
			value: '14',
			units: {
				value: '1',
				label: 'Seconds',
			}
		}
	};

	const createCondition = () => {
		getConditionObject()
		const newCondition = conditions.concat(getConditionObject());
		setConditions(newCondition);
	}
	

	// console.log(dataFields);


	const handleRemoveCondition = (id) => {

		console.log('id', id)
		// const index = findIndex()
		const newConditions = filter((c) => c.id !== id, conditions)
		console.log(newConditions)
		setConditions(newConditions)
	};


	const handleChangeRuleName = (event) => {
		console.log(event)
		setRuleName(event.target.value)
	}

	const handleChangeOpen = (openParam) => () => {
		setOpen(openParam)
	}

	const handleChangeCategory = (event) => {
		setCategory(event.target.value);
	};

	const handleChangeDataField = (event) => {
		setDataField(event.target.value);
	};

	useEffect(() => {
		setIsOpen(open)
	}, [open]);

	return (
		<Dialog open={isOpen} onClose={handleChangeOpen(false)} maxWidth="lg" fullWidth>
			<DialogTitle>Create Rule</DialogTitle>

			<FormControl variant="standard" sx={{ m: 1, minWidth: 320 }}>
				<DialogContent>
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
								id="rule-name"
								type="text"
								label="Rule Name"
								value={ruleName}
								onChange={handleChangeRuleName}
								variant="standard"
							/>
						</Box>

						<Box component="div">
							<TextField
								id="category"
								select
								label="Category"
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

					{conditions.map((condition) => (
						<Box component="div" style={{ backgroundColor: '#d8e2f3', borderColor: '#4472c4', borderWidth: '1px' }} key={condition.id}>
							<Condition condition={condition} removeCondition={handleRemoveCondition} />
						</Box>
					))}

				</DialogContent>

			</FormControl>


			<DialogActions>
				<Button onClick={handleChangeOpen(false)}>Cancel</Button>
				<Button disabled onClick={handleChangeOpen(false)}>Create</Button>
			</DialogActions>
		</Dialog>
	);
}


FormDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	setOpen: PropTypes.func.isRequired,
}
