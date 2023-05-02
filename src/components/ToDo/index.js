import React, { useState } from 'react';
import { isEmpty, isNil } from 'ramda';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Box, Button, Card, CardContent, CardActions, Container, Grid, MenuItem, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { toDos as filteredOptions, sortByOptions } from '../../constants/data/toDoMocks';
import { styles } from './styles';

const ToDo = () => {

	// const filteredOptions = [];
	const [inputValue, setInputValue] = useState('');
	const [selectedOption, setSelectedOption] = useState(null);
	const [sortBy, setSortBy] = useState('');

	const handleChangeSortBy = (event) => {
		setSortBy(event.target.value);
	};

	const handleOptionChange = (event, newOption) => {
		setSelectedOption(newOption);
	};

	const getTaskTitle = (tasks) => `${tasks[0]} ${tasks[1] || ''} ${tasks[2] || ''}`

	console.log(selectedOption)

	return (
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
						fullWidth
						onChange={handleOptionChange}
						options={filteredOptions}
						getOptionLabel={(option) => getTaskTitle(option.tasks)}
						inputValue={inputValue}
						onInputChange={(event, newInputValue) => {
							console.log('input value', newInputValue)
							setInputValue(newInputValue);
						}}
						renderOption={(props, option, { selected }) => (
							<li
								{...props}
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

					{!isEmpty(inputValue) && !isNil(selectedOption) ? (
						<Card sx={{ minWidth: 275 }}>
							<CardContent>
								{/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									Word of the Day
								</Typography> */}

								<>
									<Typography variant="body1" component="header" style={styles.strong}>
										{inputValue}
									</Typography>
									<Typography color="text.secondary">
										{selectedOption.uhid}
									</Typography>
									<Typography variant="body2">
										{selectedOption.dateofbirth}
									</Typography>
									<Typography variant="body3">
										{selectedOption.birth_weight}
									</Typography>
								</>


							</CardContent>
							{/* <CardActions>
								<Button size="small">Learn More</Button>
							</CardActions> */}
						</Card>
					) : null}
				</Grid>
			</Grid>

		</Container >


	);
};

export default ToDo;