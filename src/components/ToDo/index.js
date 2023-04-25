import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { toDos as filteredOptions } from '../../constants/data/toDoMocks';
import { styles } from './styles';

const ToDo = () => {

	// const filteredOptions = [];
	const [inputValue, setInputValue] = useState('');



	return (
		<div>
			{/* {filters.map((filter) => (
				<FormControlLabel
					key={filter.id}
					control={
						<Checkbox
							checked={filter.checked}
							onChange={handleFilterChange}
							name={filter.name}
						/>
					}
					label={filter.label}
				/>
			))} */}
			<Autocomplete
				options={filteredOptions}
				inputValue={inputValue}
				onInputChange={(event, newInputValue) => {
					setInputValue(newInputValue);
				}}
				renderOption={(props, option, { selected }) => (
          <li
            {...props}
            style={
							{
								backgroundColor:
									option.value % 2 === 0 ? '#26A69A' : '#B2DFDB',
								color: option.value % 2 === 0 ? '#FFFFFF' : 'inherit',
          	  }
					}
          >
            <div>
              <div style={styles.strong}>{option.title}</div>
              <div>{option.secondLine}</div>
              <div>{option.thirdLine}</div>
              <div>Weight {option.weight} g</div>
            </div>
          </li>
        )}
				renderInput={(params) => (
					<TextField {...params} label="To Do List" variant="outlined" />
				)}
			/>
		</div>
	);
};

export default ToDo;