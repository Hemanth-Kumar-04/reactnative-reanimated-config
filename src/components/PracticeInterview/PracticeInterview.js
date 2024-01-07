// PracticeComponent.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import Tie from '../../assets/HomeScreen/Tie.png';

const PracticeComponent = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate to the login page
    navigation.navigate('InterView'); // Replace 'Login' with the name of your login screen
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <LinearGradient
        colors={['#FF4A55', '#FF2FB8']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.card}
      >
        <View style={styles.textContainer}>
          <Text style={styles.firstLine}>Start your</Text>
          <Text style={styles.secondLine}>Interview</Text>
        </View>
        <Image style={styles.cardImage} source={Tie} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',

    padding: 46,
    borderRadius: 8,
    marginBottom: 16,
    margin: 16,
  },
  cardImage: {
    width: 70,
    height: 60,
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
  },
  firstLine: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Text color on the gradient background
  },
  secondLine: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Text color on the gradient background
  },
});

export default PracticeComponent;
