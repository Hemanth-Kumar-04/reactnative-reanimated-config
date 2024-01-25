import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/HomeScreen/HomeScreen';
import Login from './src/screens/LoginSignup/LoginScreen';
import Signup from './src/screens/LoginSignup/SignUp';
import Technology from './src/screens/InterViewScreen/Technology/Technology';
import Management from './src/screens/InterViewScreen/Management/Management';
import Design from './src/screens/InterViewScreen/Design/Design';
import InterView from './src/screens/InterViewScreen/InterView';
import TextField from './src/screens/InterViewAnswers/TextField'
import AnswerScreen from './src/screens/InterViewAnswers/AnswerScreen';
import Resume from './src/screens/Resume/Resume';
import ImgPicker from './src/screens/HomeScreen/ImgPicker'

const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Signup' component={Signup} />
          <Stack.Screen name='Resume' component={Resume} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='ImgPicker' component={ImgPicker} />
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
          <Stack.Screen name='Technology' component={Technology} />
          <Stack.Screen name='Management' component={Management} />
          <Stack.Screen name='Design' component={Design} />
          <Stack.Screen name='InterView' component={InterView} options={{ headerShown: false }} />
          <Stack.Screen name='SignUp' component={Signup} options={{ headerShown: false }} />
          <Stack.Screen name='TextField' component={TextField} options={{headerShown:false}}/>
          <Stack.Screen name='AnswerScreen' component={AnswerScreen} options={{headerShown:false}} />
          
          
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
