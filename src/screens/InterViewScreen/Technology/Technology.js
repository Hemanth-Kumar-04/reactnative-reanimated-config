import React from 'react';
import { View, Text, ScrollView, Image, Button, StyleSheet } from 'react-native';
import BackButton from '../../../components/BackButton/BackButton';

const Technology = ({ navigation }) => {
  const handleButtonPress = () => {
    // Navigate to AnotherScreen
    navigation.navigate('Design');
  };

  return (
    <ScrollView style={styles.container}>
      <BackButton/>
      <View style={styles.content}>
        <Text style={styles.heading}>Technology</Text>
        <Image source={require('../../../assets/InterView/technology-vector.png')} style={styles.image} />
        <Text style={styles.description}>
        Elevate your tech interviews with our cutting-edge AI interview app! Seamlessly blend general questions, fundamental projects, and technical inquiries to assess candidates' skills comprehensively. Revolutionize your hiring process for a tech-savvy future.
        </Text>
        <Button title="Go to Another Screen" onPress={handleButtonPress} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 16,
    alignItems: 'center',
  },
  heading: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },
  image: {
    marginBottom: 30,
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
    textAlign: 'center',
    color: 'black',
  },
});


export default Technology;
