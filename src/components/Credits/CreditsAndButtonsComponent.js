// CreditsAndButtonsComponent.js
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import  "../../assets/HomeScreen/Credits.png";

const CreditsAndButtonsComponent = () => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/HomeScreen/Credits.png")}
    >
      <View style={styles.container}>
        {/* Credits Section */}
        <View style={styles.creditsContainer}>
          <Text style={styles.madeWithCare}>Made With</Text>
          <Text style={styles.madeWithCare}>Care!</Text>
          <Text style={styles.codedWithLove}>Coded with love by</Text>
          <Text style={styles.usForYou}>Us for you</Text>
        </View>

        {/* Buttons Section */}
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Hemanth Kumar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Joel Binu</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Karthik Sagar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'left',
    padding: 16,
  },
  creditsContainer: {
    alignItems: 'left',
    marginBottom: 16,
  },
  madeWithCare: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#38B75B', // Light blue color
  },
  codedWithLove: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  usForYou: {
    fontSize: 14,
    fontWeight: 'normal', // Default font weight
  },
  buttonsContainer: {
    marginTop: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  button: {
    flex: 1,
    backgroundColor: 'rgba(219, 254, 206, 0.8)', // Blue color with some transparency
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: 'black',

    textAlign: 'center',
  },
});

export default CreditsAndButtonsComponent;
