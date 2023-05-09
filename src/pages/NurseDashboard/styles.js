export const styles = {
  container: {
    paddingTop: '64px', // Adjust this value to the height of your top navigation bar
    height: 'calc(100vh - 64px)', // Subtracting the top navigation bar height
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
    boxSizing: 'border-box', // Adding box-sizing to handle padding and border
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%', // Adjust this value for responsiveness
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', // Adding 100% height to the flexContainer
    overflow: 'auto', // Adding overflow property to handle content that exceeds the container size
  },
  square: {
    backgroundColor: '#B6D7A8', // Change this to your desired color
    width: 'calc(33.33% - 16px)', // Calculate the width of the square (subtract the desired spacing)
    paddingTop: 'calc(33.33% - 16px)', // Calculate the height of the square (subtract the desired spacing)
    position: 'relative', // Adding position relative for the square
    margin: '8px', // Adding margin equal to half the spacing
    overflow: 'hidden',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0, // Add this line to align the text container to the top of the square
    left: 0,
  },
};
