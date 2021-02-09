import React, { useEffect, useState } from 'react';
import BottomTabs from './tabs';
import Search from './screens/Search';
import { createStackNavigator } from '@react-navigation/stack';
import { SIZES } from '../constants';
import Login from './screens/Login';
import { AsyncStorage } from 'react-native';
import Home from './screens/Home';
import { useSelector } from 'react-redux';

const RootStack = createStackNavigator();
const { Navigator, Screen } = RootStack;

const screenOptions = {
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
};

const NavigationScreens = props => {
  const { userName } = useSelector(store => store);
  return (
    <>
      <Navigator screenOptions={screenOptions} mode='card'>
        {!userName ? (
          <Screen name='Login' component={Login} />
        ) : (
          <>
            <Screen name='Home' component={BottomTabs} />
            <Screen name='Search' component={Search} />
          </>
        )}
      </Navigator>
    </>
  );
};

export default NavigationScreens;
