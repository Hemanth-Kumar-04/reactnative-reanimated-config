// App.js
import React from 'react';
import { View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const App = () => {
  const fadeValue = useSharedValue(0);

  // Animation function
  const fadeIn = () => {
    fadeValue.value = withSpring(1);
  };

  // Apply animated style
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeValue.value,
    };
  });

  // Trigger the animation on component mount
  React.useEffect(() => {
    fadeIn();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View style={[{ width: 100, height: 100, backgroundColor: 'blue' }, animatedStyle]}>
        <Text style={{ color: 'white' }}>Hello, Reanimated!</Text>
      </Animated.View>
    </View>
  );
};

export default App;
