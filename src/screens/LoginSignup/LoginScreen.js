import React, { useState } from 'react';
import {StyleSheet, Image, ScrollView, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('User signed in successfully:', user);
      // Navigate to the next screen or perform other actions upon successful login
      navigation.navigate('Home'); // Change 'Home' to the screen you want to navigate to
    } catch (error) {
      console.error('Login failed:', error.code, error.message);
      // Handle login error (display error message, etc.)
    }
  };

  const navigateToSignup = () => {
    navigation.navigate('Resume');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/LoginSignup/Login.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.loginText}>LOGIN</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        theme={{ colors: { primary: 'blue' } }} // Set input color to blue
        underlineColor="transparent" // Remove the underline
      />
      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        theme={{ colors: { primary: 'blue' } }} // Set input color to blue
        underlineColor="transparent" // Remove the underline
      />
      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
        color="blue">
        Log In
      </Button>
      <Button onPress={navigateToSignup} style={styles.signupButton}>
        Sign Up
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  logo: {
    marginTop:-50,
    height:300 ,
    alignSelf: 'center',
  },
  loginText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  input: {
    marginBottom: 10,
    borderRadius: 10, // Set border radius for rounded corners
  },
  button: {

    marginTop: 36,
    borderRadius: 10, // Set border radius for rounded corners
  },
  signupButton: {
    marginTop: 15,
    borderRadius: 10,
    color: 'blue',
  },
});

export default LoginScreen;