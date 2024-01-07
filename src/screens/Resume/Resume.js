// ResumeForm.js

import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { TextInput, Button, Title, Portal, Modal, Text } from 'react-native-paper';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import firestore from '@react-native-firebase/firestore'; // Import firestore
import auth from '@react-native-firebase/auth'; // Import auth

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

LocaleConfig.defaultLocale = 'en';

const Resume = () => {
  const [DBname, setDBName] = useState('');
  const [DBemail, setDBEmail] = useState('');
  const [DBphone, setDBPhone] = useState('');
  const [DBeducation, setDBEducation] = useState('');
  const [DBexperience, setDBExperience] = useState('');
  const [DBskills, setDBSkills] = useState('');
  const [DBdob, setDBDob] = useState(null);
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const toggleCalendarVisibility = () => {
    setCalendarVisible(!isCalendarVisible);
  };

  const handleDatePress = () => {
    toggleCalendarVisibility();
  };

  const handleDayPress = day => {
    setDBDob(day.dateString);
    toggleCalendarVisibility();
  };

  const handleSubmit = async () => {
    try {
      // Validate required fields
      if (!DBname || !DBemail || !DBphone || !DBeducation || !DBexperience || !DBskills || !DBdob) {
        Alert.alert('Error', 'All fields are required.');
        return;
      }

      // Get the currently authenticated user
      const currentUser = auth().currentUser;

      if (!currentUser) {
        // User is not logged in
        console.error('User not logged in');
        return;
      }

      // Store the form data in Firestore
      await firestore().collection('Users').doc(currentUser.email).set({
        DBname,
        DBemail: currentUser.email, // Use the authenticated user's email
        DBphone,
        DBeducation,
        DBexperience,
        DBskills,
        DBdob,
        // Add other fields as needed
      });

      Alert.alert('Success', 'Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error.message);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title style={styles.formTitle}>Resume Form</Title>
      <TextInput
        label="Name"
        value={DBname}
        onChangeText={setDBName}
        style={styles.input}
        required
      />
      <TextInput
        label="Email"
        value={DBemail}
        onChangeText={setDBEmail}
        style={styles.input}
        required
      />
      <TextInput
        label="Phone"
        value={DBphone}
        onChangeText={setDBPhone}
        style={styles.input}
        required
      />
      <TextInput
        label="Education"
        value={DBeducation}
        onChangeText={setDBEducation}
        style={styles.input}
        required
      />
      <TextInput
        label="Experience"
        value={DBexperience}
        onChangeText={setDBExperience}
        style={styles.input}
        multiline
        required
      />
      <TextInput
        label="Skills"
        value={DBskills}
        onChangeText={setDBSkills}
        style={styles.input}
        multiline
        required
      />
      <Title style={styles.dateTitle} onPress={handleDatePress}>
        Select Date
      </Title>
      {DBdob && <Text style={styles.selectedDate}>{DBdob}</Text>}
      <Portal>
        <Modal visible={isCalendarVisible} onDismiss={toggleCalendarVisibility}>
          <Calendar
            onDayPress={handleDayPress}
            markedDates={DBdob ? {[DBdob]: {selected: true}} : {}}
          />
        </Modal>
      </Portal>
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Submit
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  formTitle: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    color: 'black',
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
  },
  dateTitle: {
    fontSize: 18,
    marginTop: 12,
    marginBottom: 8,
    color: 'blue',
  },
  selectedDate: {
    fontSize: 18,
    marginVertical: 8,
    color: 'black',
  },
});

export default Resume;
