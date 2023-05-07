export const styles = {
  strong: {
    fontWeight: 700,
  },
  searchList: (value) => ({
    backgroundColor: value % 2 === 0 ? '#26A69A' : '#B2DFDB',
    color: value % 2 === 0 ? '#FFFFFF' : 'inherit',
  }),
};
