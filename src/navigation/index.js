import React from 'react';

import BottomTabs from './tabs';

import { createStackNavigator } from '@react-navigation/stack';
import { SIZES } from '../constants';

const RootStack = createStackNavigator();
const { Navigator, Screen } = RootStack;

const NavigationScreens = props => (
  <>
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          borderRadius:SIZES.radius1
        },
      }}
    >
      <Screen name='Home' component={BottomTabs} />
    </Navigator>
  </>
);

export default NavigationScreens;
