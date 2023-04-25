import React from 'react';
import ToDo from '../../components/ToDo';
import { Box } from '@mui/material';

const ToDoPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '50vh',
            }}
        >
            <Box sx={{ width: '50vw' }}>
                <ToDo />
            </Box>
        </Box>

    )
};

export default ToDoPage;
