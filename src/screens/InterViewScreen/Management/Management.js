import React from 'react';
import {View, Text, ScrollView, Image, Button, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from '../../../components/BackButton/BackButton';
const Management = ({navigation}) => {
  const handleButtonPress = () => {
    // Navigate to AnotherScreen
    navigation.navigate('Technology');
  };

  return (
    <SafeAreaView>
       <BackButton/>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.heading}>Management</Text>
          <Image
            source={require('../../../assets/InterView/management-vector.png')}
            style={styles.image}
          />
          <Text style={styles.description}>
            Transform your management role interviews with our state-of-the-art
            AI interview app! Effortlessly integrate a mix of general inquiries,
            fundamental projects, and strategic questions to holistically
            evaluate candidates' capabilities. Redefine your hiring approach for
            a leadership-driven tomorrow
          </Text>
          <Button title="Go to Another Screen" onPress={handleButtonPress} />
        </View>
      </ScrollView>
    </SafeAreaView>
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

export default Management;
