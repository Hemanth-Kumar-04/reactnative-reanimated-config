import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
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
      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
        color="blue">
        Log In
      </Button>
      <Button onPress={navigateToSignup}>Sign Up</Button>
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

export default LoginScreen;
