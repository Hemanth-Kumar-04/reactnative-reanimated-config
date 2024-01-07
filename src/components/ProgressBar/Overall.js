import React from 'react';
import { View, StyleSheet } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const OverallBar = () => {
  return (
    <View style={styles.container}>
      <CircularProgress
        radius={50}
        percent={75} // Adjust the percentage as needed
        color="blue"
        bgcolor="lightgray"
        innerRadius={45}
        duration={5000} // Adjust the duration as needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OverallBar;