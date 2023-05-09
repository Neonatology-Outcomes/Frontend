import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { styles } from './styles';

function NurseDashboard() {
  const data = [
    ['P19997642', 'DoB 28.2.23', 'Weight 2675g'],
    ['P19997645', 'DoB 2.3.23', 'Weight 2689g'],
    ['P19997645', 'DoB 4.3.23', 'Weight 2675g'],
    ['P19997645', 'DoB 2.3.23', 'Weight 2675g'],
    ['P19997645', 'DoB 2.3.23', 'Weight 2675g'],
    ['P19997645', 'DoB 2.3.23', 'Weight 2675g'],
    ['P19997645', 'DoB 2.3.23', 'Weight 2675g'],
    ['P19997645', 'DoB 2.3.23', 'Weight 2675g'],
    ['P19997645', 'DoB 2.3.23', 'Weight 2675g'],
  ];
  return (
    <Container maxWidth={false} disableGutters style={styles.container}>
      <div style={styles.flexContainer}>
        {data.map((item, index) => (
          <Paper key={index} style={styles.square}>
            <div style={styles.textContainer}>
              <Typography variant="body1">{item[0]}</Typography>
              <Typography variant="body1">{item[1]}</Typography>
              <Typography variant="body1">{item[2]}</Typography>
            </div>
          </Paper>
        ))}
      </div>
    </Container>
  );
}
export default NurseDashboard;
