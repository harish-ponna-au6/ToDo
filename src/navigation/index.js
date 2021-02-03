import React from 'react';

import BottomTabs from './tabs';
import Search from '../screens/Search';

import { createStackNavigator } from '@react-navigation/stack';
import { SIZES } from '../constants';

const RootStack = createStackNavigator();
const { Navigator, Screen } = RootStack;

const NavigationScreens = props => (
  <>
    <Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        gestureDirection: 'horizontal',
        cardStyle: {
          borderRadius: SIZES.radius1,
        },
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      }}
      mode='card'
    >
      <Screen name='Home' component={BottomTabs} />
      <Screen name='Search' component={Search} />
    </Navigator>
  </>
);

export default NavigationScreens;
