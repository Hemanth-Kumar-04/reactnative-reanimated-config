import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ConfidenceBar from '../../components/ProgressBar/Confidence';

const QuestionScreen = () => {

  return (
    <View>
      <ConfidenceBar/>
    

      <Text style={styles.heading}>Answers</Text>

      <Text style={styles.question}>1. What is the capital of France?</Text>
      <View style={styles.container}>
        <View style={styles.answerContainer}>
          <View style={styles.yellowBox}>
            <Text style={styles.answer}>
              Paris hiashsdohsai jhsodhoaishdoiha haodsihoiashdoihashd
              hiohdasoidhoash oihoihoasihdoi asoihdoiashodihasoihdoi
              aosihdoishaoh
            </Text>
          </View>
          <View style={styles.redBox}>
            <Text style={styles.answer}>Berlin</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 15,
  },
  container: {
    alignItems: 'center',
  },
  question: {
    textAlign: 'left',
    marginLeft: 20,
    color: 'black',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 2,
  },

  yellowBox: {
    backgroundColor: 'rgba(236, 255, 21, 0.75)',
    padding: 20,
    marginRight: 10,
    borderRadius: 15,
    marginBottom: 10,
    borderColor: 'black', // Add border color here
    borderWidth: 1, // Add border width here
  },
  redBox: {
    backgroundColor: 'green',
    padding: 20,
    marginRight: 10,
    borderRadius: 15,
    marginBottom: 10,
    borderColor: 'black', // Add border color here
    borderWidth: 1, // Add border width here
  },
  answer: {
    fontSize: 16,
    color: 'black',
  },
});

export default QuestionScreen;
