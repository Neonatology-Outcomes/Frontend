import { faker } from '@faker-js/faker';

const labels = ['2020-01', '2020-03', '2020-05', '2020-07', '2020-09', '2020-11'];

export const dataA = {
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

export const dataB = {
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
