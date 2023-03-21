import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
import { Box } from '@mui/system';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
import Condition from '../../Condition';
import { AddCircleOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';


export default function FormDialog({ open, setOpen }) {
	const [isOpen, setIsOpen] = useState(open);
	const [ruleName, setRuleName] = useState('Human Milk Consumption');
	const [dataField, setDataField] = useState('1');
	// const [ruleName, setRuleName] = useState('');
	// const [ruleName, setRuleName] = useState('');
	const [category, setCategory] = useState('1');
	// const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

	const conditionsList = [
		{

		}
	];

	const categories = [
		{
			value: '1',
			label: 'Birth Details',
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

							<TextField
								id="data-field"
								select
								label="Date Field"
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

							<IconButton color="primary" aria-label="add new condition" sx={{ mt: '0.5rem', ml: '1rem' }}>
								<AddCircleOutline fontSize="large" />
							</IconButton>
						</Box>


					</Box>

					<Box component="div" style={{ backgroundColor: '#d8e2f3', borderColor: '#4472c4', borderWidth: '1px' }}>
						<Condition />
					</Box>

				</DialogContent>

			</FormControl>


			<DialogActions>
				<Button onClick={handleChangeOpen(false)}>Cancel</Button>
				<Button onClick={handleChangeOpen(false)}>Create</Button>
			</DialogActions>
		</Dialog>
	);
}