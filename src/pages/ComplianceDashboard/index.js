/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import {
  Grid,
  Button,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { styles } from './styles';
import { getVariant, getVariantStyle } from '../../utils';
import { dataA, dataB } from '../../constants/data/complianceMocks';

function ComplianceDashboard() {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      //   title: {
      //     display: true,
      //     text: 'Chart.js Line Chart',
      //   },
    },
  };

  const [selectedBundle, setSelectedBundle] = useState('At Admission');

  const handleSetBundle = (bundle) => () => {
    setSelectedBundle(bundle);
  };

  const tableData = [
    ['103476710', '4 out of 4', 'Compliant', 'Compliant'],
    ['409747245', '3 out of 4', 'Non-Compliant', 'Compliant'],
    ['848278919', '0 out of 4', 'Non-Compliant', 'Non-Compliant'],
    ['344234311', '0 out of 4', 'Non-Compliant', 'Non-Compliant'],
  ];

  return (
    <Grid container className={styles.root} mt="2rem" p="1rem">
      <Grid item xs={6}>
        <Button
          onClick={handleSetBundle('At Admission')}
          variant={getVariant(selectedBundle === 'At Admission')}
          style={{ ...getVariantStyle(selectedBundle === 'At Admission'), fontSize: '1.2rem' }}
        >
          At Admission
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          onClick={handleSetBundle('In NICU')}
          variant={getVariant(selectedBundle === 'In NICU')}
          style={{ ...getVariantStyle(selectedBundle === 'In NICU'), fontSize: '1.2rem' }}
        >
          At NICU
        </Button>
      </Grid>
      {/* <Grid item xs={3} className={styles.column}>
        <Typography>Column 1</Typography>
      </Grid>
      <Grid item xs={3} className={styles.column}>
        <Typography>Column 2</Typography>
      </Grid>
      <Grid item xs={3} className={styles.column}>
        <Typography>Column 3</Typography>
      </Grid>
      <Grid item xs={3} className={styles.column}>
        <Typography>Column 4</Typography>
      </Grid> */}
      <Grid item xs={6} mt="2rem">
        <Line options={options} data={dataA} />
      </Grid>
      <Grid item xs={6} mt="2rem">
        <Line options={options} data={dataB} />
      </Grid>
      <Grid item xs={12} mt="2rem">
        <Typography variant="h5">
          Human milk consumption bundle Compliance Summary by UHID
        </Typography>
        <TableContainer component={Paper} sx={{ mt: '2rem' }}>
          <Table className={styles.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={styles.strong}>UHID</TableCell>
                <TableCell style={styles.strong}>Elements Compliant</TableCell>
                <TableCell style={styles.strong}>S2S Thrice/day</TableCell>
                <TableCell style={styles.strong}>
                  Weekly multidisciplinary lactation rounds
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  <TableCell>{row[0]}</TableCell>
                  <TableCell>{row[1]}</TableCell>
                  <TableCell>{row[2]}</TableCell>
                  <TableCell>{row[3]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default ComplianceDashboard;
