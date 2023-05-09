export const styles = {
  container: {
    minHeight: 'calc(100vh - 68px)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
  notificationButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  pageContainer: {
    paddingTop: '30px', // Adjust the padding to your preferences
  },
  squareText: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
};
