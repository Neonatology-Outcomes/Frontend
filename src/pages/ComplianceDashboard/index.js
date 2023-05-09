/* eslint-disable react/no-array-index-key */
import React from 'react';
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
import { faker } from '@faker-js/faker';
import { styles } from './styles';

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

  const labels = ['2020-01', '2020-03', '2020-05', '2020-07', '2020-09', '2020-11'];

  const dataA = {
    labels,
    datasets: [
      {
        label: 'Human Milk comsumption compliance',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const dataB = {
    labels,
    datasets: [
      {
        label: 'Room temp',
        data: labels.map(() => faker.datatype.number({ min: 25, max: 100 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Warmer Manual',
        data: labels.map(() => faker.datatype.number({ min: 25, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Heating Output',
        data: labels.map(() => faker.datatype.number({ min: 25, max: 1000 })),
        borderColor: 'rgb(255, 255, 0)',
        backgroundColor: 'rgba(255, 255, 0, 0.5)',
      },
      {
        label: 'Warmer Mattress',
        data: labels.map(() => faker.datatype.number({ min: 25, max: 1000 })),
        borderColor: 'rgb(0, 128, 0)',
        backgroundColor: 'rgba(0, 128, 0, 0.5)',
      },
    ],
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
        <Button className={styles.button}>At Admission</Button>
      </Grid>
      <Grid item xs={6}>
        <Button className={styles.button}>At NICU</Button>
      </Grid>
      <Grid item xs={3} className={styles.column}>
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
      </Grid>
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

  //   return <Line options={options} data={data} />;
}

export default ComplianceDashboard;
