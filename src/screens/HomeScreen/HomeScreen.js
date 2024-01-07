// HomeScreen.js
import React from 'react';
import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import styles from './styles';
import FeaturesComponent from '../../components/FeaturesScrollable/FeaturesScrollable';
import PracticeComponent from '../../components/PracticeInterview/PracticeInterview';
import CreditsAndButtonsComponent from '../../components/Credits/CreditsAndButtonsComponent';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>Hello....</Text>
            <Text style={styles.name}>Name To Be Here</Text>
          </View>
          <Image
            style={styles.rightAlignedImage}
            source={require('../../assets/HomeScreen/face.png')}
          />
        </View>
        <View>
          {/* Add the FeaturesComponent here */}
          <FeaturesComponent />

          {/* Add the PracticeComponent below the FeaturesComponent */}
          <PracticeComponent />
        </View>

        {/* Add the CreditsAndButtonsComponent at the bottom */}
        <CreditsAndButtonsComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
