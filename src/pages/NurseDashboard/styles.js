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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto',
    padding: '0 8px', // Add padding
  },
  square: {
    backgroundColor: '#B6D7A8',
    flexBasis: 'calc(25% - 16px)', // Change the width and height to use flex-basis and max-width
    maxWidth: 'calc(25% - 16px)',
    paddingTop: 'calc(25% - 16px)',
    position: 'relative',
    margin: '8px',
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
    top: 0,
    left: 0,
  },
  notificationButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  pageContainer: {
    paddingTop: '30px',
    paddingBottom: '30px', // Add paddingBottom to prevent scrollbar
  },
  squareText: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
};
