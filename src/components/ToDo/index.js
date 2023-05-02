import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Box, Container, Grid, MenuItem } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { toDos as filteredOptions, sortByOptions } from '../../constants/data/toDoMocks';
import { styles } from './styles';

const ToDo = () => {

	// const filteredOptions = [];
	const [inputValue, setInputValue] = useState('');
	const [sortBy, setSortBy] = useState('');

	const handleChangeSortBy = (event) => {
		setSortBy(event.target.value);
	};



	return (
		<Container
			component="section"
			maxWidth="md"
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: 'calc(50vh - 64px)',

			}}
		>
			<Grid container spacing={2} justifyContent="center">
				<Grid item xs={12} sm={12} md={9}>

					<Autocomplete
						fullWidth
						options={filteredOptions}
						inputValue={inputValue}
						onInputChange={(event, newInputValue) => {
							setInputValue(newInputValue);
						}}
						renderOption={(props, option, { selected }) => (
							<li
								{...props}
								style={styles.searchList(option.value)}
							>
								<div>
									<div style={styles.strong}>{option.task}</div>
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
				</Grid>
			</Grid>

		</Container>


	);
};

export default ToDo;