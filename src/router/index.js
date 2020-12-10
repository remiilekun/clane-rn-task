import * as React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { colors } from '@theme/colors';
import { NavHeader } from '@components/molecules';

import Home from '@screens/Home';
import ReactHookForm from '@screens/ReactHookForm';

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
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ReactHookForm" component={ReactHookForm} />
    </Stack.Navigator>
  );
}

export default App;
