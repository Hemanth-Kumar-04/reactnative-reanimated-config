import React from 'react';
import { View, Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

const ConfidenceBar = () => {
  const progress = 75; // Set the progress value (between 0 and 100)

  return (
    <View style={{alignItems: 'center' }}>
      {/* Display the ProgressCircle component */}
      <ProgressCircle
        percent={progress}
        radius={50}
        borderWidth={15}
        color="#3399FF"
        shadowColor="#999"
        bgColor="#fff"
      >
        {/* You can put your content inside the ProgressCircle */}
        <Text style={{ fontSize: 18 }}>{`${progress}%`}</Text>
      </ProgressCircle>
    </View>
  );
};

export default ConfidenceBar;
