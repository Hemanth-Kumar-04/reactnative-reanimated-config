import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
      {/* Replace 'your-back-image.png' with the actual image source */}
      <Image source={require('../../assets/InterView/Back.png')} style={styles.backImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginRight: 10,
    marginLeft:5,
    marginTop:7,
  },
  backImage: {
    width: 40, // Adjust the width as needed
    height: 40, // Adjust the height as needed
  },
});

export default BackButton;
