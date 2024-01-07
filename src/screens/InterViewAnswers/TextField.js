// QuestionScreen.js
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  ScrollView,
} from 'react-native';

const QuestionScreen = ({navigation}) => {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [charCount1, setCharCount1] = useState(0);
  const [charCount2, setCharCount2] = useState(0);

  const handleTextChange1 = text => {
    setAnswer1(text);
    setCharCount1(text.length);
  };

  const handleTextChange2 = text => {
    setAnswer2(text);
    setCharCount2(text.length);
  };

  const handleNext = () => {
    // Navigate to the AnswerScreen with the user's answers
    navigation.navigate('AnswerScreen', {answer1, answer2});
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}> Technical </Text>
        <Text style={styles.subheading}> Interview </Text>
        <Text style={styles.question}>1. Question 1</Text>
        <TextInput
          placeholder="Your Answer"
          value={answer1}
          onChangeText={handleTextChange1}
          style={[styles.input, charCount1 > 300 && styles.inputError]}
          multiline
          maxLength={300} // Set the maximum character limit
        />
        <Text
          style={{color: charCount1 > 300 ? 'red' : 'black', marginBottom: 25}}>
          Characters: {charCount1}/300
        </Text>
        <Text style={styles.question}>2. Question 2</Text>
        <TextInput
          placeholder="Your Answer"
          value={answer2}
          onChangeText={handleTextChange2}
          style={[styles.input, charCount2 > 300 && styles.inputError]}
          multiline
          maxLength={300} // Set the maximum character limit
        />
        <Text style={{color: charCount2 > 300 ? 'red' : 'black'}}>
          Characters: {charCount2}/300
        </Text>
        <Button title="Submit" onPress={handleNext} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  subheading: {
    color: 'black',
    fontWeight: 'regular',
    fontSize: 25,
    textAlign: 'center',
  },
  question: {
    color: 'black',
    fontSize: 16,
  },
  input: {
    marginBottom: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 30,
    textAlignVertical: 'top', // Ensures that text starts from the top in multiline
  },
  inputError: {
    borderColor: 'red',
  },
});

export default QuestionScreen;
