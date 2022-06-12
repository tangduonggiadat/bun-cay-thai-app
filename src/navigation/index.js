import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
// import HomeScreen from '../screens/Home';

import {Home, Promotion, MemberCard} from '../screens';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      headerMode={'none'}
      initialRouteName={'Promotion'}
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Promotion'} component={Promotion} />
      <Stack.Screen name={'MemberCard'} component={MemberCard} />
    </Stack.Navigator>
  );
};

export default RootStack;
