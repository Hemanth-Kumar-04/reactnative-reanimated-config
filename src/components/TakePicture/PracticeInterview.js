// PracticeComponent.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Medicine from '../../assets/HomeScreen/Medicine.png';

const PracticeComponent = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate to the ImgPicker screen
    navigation.navigate('ImgPicker');
  };

  return (
    <View>
      <LinearGradient
        colors={['#A9FFB1', '#44F4FF']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.card}
      >
        <Image style={styles.cardImage} source={Medicine} />
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>TAKE A PICTURE</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    marginBottom: 16,
    margin: 16,
  },
  button: {
    backgroundColor: '#3726FF', // Blue color
    padding: 10,
    paddingLeft:65,
    paddingRight:65,
    borderRadius: 5,
    marginLeft: 20, // Adjust the margin as needed
    marginTop:20,
  },
  buttonText: {
    color: '#FFFFFF', // White text
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardImage: {
    marginTop:12,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PracticeComponent;