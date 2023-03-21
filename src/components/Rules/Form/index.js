import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { Box } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export default function FormDialog({ open, setOpen }) {
  const [isOpen, setIsOpen] = useState(open);
  const theme = useTheme();
  const [ruleName, setRuleName] = useState('Human milk consumption');
  const [dataField, setDataField] = useState('1');
  // const [ruleName, setRuleName] = useState('');
  // const [ruleName, setRuleName] = useState('');
  const [category, setCategory] = useState('1');
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

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

  const handleSetOpen = (openStateParam) => () => {
    setOpen(openStateParam)
  }

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    setIsOpen(open)
  }, [open]);

  return (
      <Dialog open={isOpen} onClose={handleSetOpen(false)} fullWidth>
        <DialogTitle>Create Rule</DialogTitle>
        
        <FormControl  variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <DialogContent>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="rule-name"
                  label="Rule Name"
                  defaultValue="1"
                  value={ruleName}
                  // helperText="Please select your currency"
                  variant="standard"
                >
                  {categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>

              <div>
                <TextField
                  id="category"
                  select
                  label="Category"
                  value={category}
                  defaultValue="1"
                  // helperText="Please select your currency"
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
                  defaultValue="1"
                  value={dataField}
                  // helperText="Please select your currency"
                  variant="standard"
                >
                  {dataFields.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </Box>
            
          </DialogContent>

        </FormControl>

        
        <DialogActions>
          <Button onClick={handleSetOpen(false)}>Cancel</Button>
          <Button onClick={handleSetOpen(false)}>Subscribe</Button>
        </DialogActions>
      </Dialog>
  );
}