import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import RulesForm from '../../components/Rules/Form';
import { rulesListMock } from '../../constants/data/rulesMocks';

const columns = [
  { field: 'ruleName', headerName: 'Rule Name', width: 220 },
  { field: 'condition', headerName: 'Condition', width: 400 },
  { field: 'action', headerName: 'Action', width: 400 },
];

export default function Rules() {
  const [open, setOpen] = useState(false);

  const setOpenForm = (value) => () => {
    // console.log('*****', value)
    setOpen(value);
  };

  return (
    <section style={{ height: '70vh', width: '100%' }}>
      <DataGrid
        rows={rulesListMock}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignContent: 'space-around',
          marginRight: '3rem',
          marginTop: '2rem',
        }}
      >
        <Fab color="primary" aria-label="add" onClick={setOpenForm(true)}>
          <AddIcon />
        </Fab>
      </Box>

      <RulesForm open={open} setOpen={setOpen} />
    </section>
  );
}
