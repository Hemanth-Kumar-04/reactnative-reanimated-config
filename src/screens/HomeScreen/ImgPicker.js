import React, { useState, useEffect } from 'react';
import { View, Image, Button, Text, StyleSheet } from 'react-native';
import { firebase } from '@react-native-firebase/app';
import '@react-native-firebase/ml';

const ImgPicker = () => {
  const [inputImage, setInputImage] = useState('https://example.com/default-image.jpg'); // Replace with your default image URL
  const [result, setResult] = useState('');

  useEffect(() => {
    // Run inference when component mounts
    handleInference();
  }, []); // Empty dependency array to run only once on mount

  const handleInference = async () => {
    try {
      // Load the Firebase ML model
      const modelManager = firebase.ml().modelManager();
      const model = await modelManager.getLatestModelByName('sample'); // Adjust based on your model's name

      // Load the image for inference
      const imageUri = inputImage;

      // Perform image classification inference using the model
      const output = await model.runOnImage({
        path: imageUri,
        imageDimensions: [224, 224], // Adjust based on your model's input size
      });

      // Display the result
      setResult(`Result: ${output}`);
    } catch (error) {
      console.error('Error performing inference:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: inputImage }} style={styles.image} />
      <Button title="Run Inference" onPress={handleInference} />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 12,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ImgPicker;
