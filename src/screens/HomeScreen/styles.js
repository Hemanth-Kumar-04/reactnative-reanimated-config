// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Align children in a row
    alignItems: 'center', // Align items vertically in the center
    padding: 16,
  },
  text: {
    fontSize: 18,
    color: 'black', // Set text color to black
    fontWeight: 'bold', // Make text bold
    marginRight: 8, // Add some right margin to separate text and image
  },
  name: {
    fontSize: 25,
    color: 'black', // Set text color to black
    fontWeight: 'bold', // Make text bold
    marginRight: 8, // Add some right margin to separate text and image
  },
  rightAlignedImage: {    
    alignSelf: 'flex-end',
    width: 150, // Adjust the width according to your needs
    height: 150, // Adjust the height according to your needs
    marginLeft: 25, // Add some left margin to separate text and image
  },
});

export default styles;
