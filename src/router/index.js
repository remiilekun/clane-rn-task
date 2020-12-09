import * as React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import HomeScreen from '@screens/Home';
import { colors } from '@theme/colors';
import { NavHeader } from '@components/molecules';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerLeft: () => <NavHeader.BackArrow />,
        headerTitleStyle: {
          color: colors.dark,
          fontFamily: 'Gilroy-SemiBold',
          fontSize: 22,
        },
        headerStyle: {
          backgroundColor: colors.white,
        },
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default App;
