import React, { useState } from 'react';
import { View, StyleSheet, Image, ScrollView, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleSignup = async () => {
    try {
      // Check if passwords match
      if (password !== retypePassword) {
        console.error('Passwords do not match');
        // Handle password mismatch (display error message, etc.)
        return;
      }

      // Create a new user with email and password
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;

      // Store additional user data in Firestore
      await firestore().collection('Users').doc(user.uid).set({
        name,
        email,
      });

      console.log('User registered successfully:', user);

      // Navigate to the login screen or perform other actions upon successful signup
      navigation.navigate('Login');
    } catch (error) {
      console.error('Signup failed:', error.code, error.message);
      // Handle signup error (display error message, etc.)
    }
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../assets/LoginSignup/SignUp.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.signupText}>SIGNUP</Text>
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
        theme={{ colors: { primary: 'blue' } }} // Set input color to blue
        underlineColor="transparent" // Remove the underline
      />
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
      <TextInput
        label="Retype Password"
        secureTextEntry
        value={retypePassword}
        onChangeText={(text) => setRetypePassword(text)}
        style={styles.input}
        theme={{ colors: { primary: 'blue' } }} // Set input color to blue
        underlineColor="transparent" // Remove the underline
      />
      <Button
        mode="contained"
        onPress={handleSignup}
        style={styles.button}
        color="blue">
        Signup
      </Button>
      <Button onPress={navigateToLogin}>Already have an account? Log In</Button>
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
    height: 300,
    marginBottom: 0,
    alignSelf: 'center',
  },
  signupText: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:-15,
    color: 'black',
  },
  input: {
    marginBottom: 10,
    borderRadius: 10, // Set border radius for rounded corners
  },
  button: {
    marginTop: 16,
    borderRadius: 10, // Set border radius for rounded corners
  },
});

export default SignUpScreen;
