import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import jobUserImage from '../../assets/HomeScreen/job-user.png';
import News from '../../assets/HomeScreen/News.png';
import Report from '../../assets/HomeScreen/report.png'
const YourComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cards</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* Card 1 */}
        <LinearGradient
          colors={['rgb(244, 229, 95)', '#F47DBE']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.card}>
          <View>
            <Text style={styles.cardDescription}>Description for Card 3</Text>
            <Text style={styles.cardTitle}>Card 3</Text>
          </View>
          <Image source={Report} style={styles.newsImage} />
        </LinearGradient>

        {/* Card 2 */}
        <LinearGradient
          colors={['#8A56F9', '#4F4BFA']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.card}>
          <View>
            <Text style={styles.cardDescription}>Description for Card 3</Text>
            <Text style={styles.cardTitle}>Card 3</Text>
          </View>
          <Image source={News} style={styles.cardImage} />
        </LinearGradient>

        {/* Card 3 */}
        <LinearGradient
          colors={['#F946A7', '#F91313']}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}
          style={styles.card}>
          <View>
            <Text style={styles.cardDescription}>Description for Card 3</Text>
            <Text style={styles.cardTitle}>Card 3</Text>
          </View>
          <Image source={jobUserImage} style={styles.cardImage} />
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  newsImage:{
    width: 70,
    height: 80,
    marginLeft: 20,
    borderRadius: 8,
  },
  card: {
    height: 150,
    width: 300,
    marginRight: 16,
    padding: 16,
    borderRadius: 8,
    overflow: 'hidden',
    flexDirection: 'row', // Set flexDirection to 'row' for aligning items horizontally
    alignItems: 'center', // Align items vertically in the center
  },
  cardTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
    // Allow the title to take up available space
  },
  cardDescription: {
    fontSize: 16,
    color: 'black',
    // Allow the description to take up available space
  },
  cardImage: {
    width: 80,
    height: 80,
    marginLeft: 20,
    borderRadius: 8,
  },
});

export default YourComponent;
