// PracticeComponent.js
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook
import Tie from '../../assets/HomeScreen/Tie.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../../components/BackButton/BackButton';

const InterView = () => {
  const navigation = useNavigation();

  const handlePress1 = () => {
    // Navigate to the login page
    navigation.navigate('Technology'); // Replace 'Login' with the name of your login screen
  };

  const handlePress2 = () => {
    // Navigate to the login page
    navigation.navigate('Management'); // Replace 'Login' with the name of your login screen
  };

  const handlePress3 = () => {
    // Navigate to the login page
    navigation.navigate('Design'); // Replace 'Login' with the name of your login screen
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
            <BackButton/>
            <View style={styles.container}>
          <Text style={styles.textOne}>Select your </Text>
          <Text style={styles.textTwo}>INTERVIEW</Text>
          <TouchableOpacity onPress={handlePress1}>
            <LinearGradient
              colors={['#D75FF5', '#FF769F']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.card}>
              <View style={styles.textContainer}>
                <Text style={styles.firstLine}>Start your interview</Text>
                <Text style={styles.secondLine}>Technology</Text>
              </View>
              <Image style={styles.cardImage} source={Tie} />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePress2}>
            <LinearGradient
              colors={['#5FB6F5', '#5FF5AD']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.card}>
              <View style={styles.textContainer}>
                <Text style={styles.firstLine}>Start your interView</Text>
                <Text style={styles.secondLine}>Management</Text>
              </View>
              <Image style={styles.cardImage} source={Tie} />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePress3}>
            <LinearGradient
              colors={['#F5E65F', '#F55FEF']}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}
              style={styles.card}>
              <View style={styles.textContainer}>
                <Text style={styles.firstLine}>Start your interview</Text>
                <Text style={styles.secondLine}>Design</Text>
              </View>
              <Image style={styles.cardImage} source={Tie} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
     marginTop:-40,
  },
  textOne: {
    fontSize: 18,
    fontWeight: 'regular',
    color: 'black', // Text color on the gradient background
    marginHorizontal: 16,
    marginBottom: -12,
    marginTop: 42,
  },
  textTwo: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 16,
  },
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
    marginLeft: -20,
  },
  firstLine: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white', // Text color on the gradient background
  },
  secondLine: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white', // Text color on the gradient background
  },
});

export default InterView;
