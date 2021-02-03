import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Text, SafeAreaView, View, StatusBar } from 'react-native';
import { COLORS, FONTS, SIZES } from './src/constants';
import { NavigationContainer } from '@react-navigation/native';
import NavigationScreens from './src/navigation';
// import RNBootSplash from 'react-native-bootsplash';
import SplashScreen from 'react-native-splash-screen';

const App = _ => {
  useEffect(_ => {
    // RNBootSplash.hide(); // immediate
    // RNBootSplash.hide({ fade: true }); // fade
    SplashScreen.hide();
  });
  return (
    <>
      <SafeAreaView>
        <StatusBar backgroundColor={COLORS.green1} />
        <View
          style={{
            backgroundColor: COLORS.green1,
            height: '100%',
            padding: SIZES.padding3,
          }}
        >
          <NavigationContainer>
            <NavigationScreens />
          </NavigationContainer>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

