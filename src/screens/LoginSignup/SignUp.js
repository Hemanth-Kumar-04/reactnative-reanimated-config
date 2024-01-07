import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        label="Retype Password"
        secureTextEntry
        value={retypePassword}
        onChangeText={(text) => setRetypePassword(text)}
      />
      <Button
        mode="contained"
        onPress={handleSignup}
        style={styles.button}
        color="blue">
        Signup
      </Button>
      <Button onPress={navigateToLogin}>Already have an account? Log In</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  button: {
    marginTop: 16,
  },
});

export default SignUpScreen;
