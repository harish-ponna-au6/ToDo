import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import { COLORS, SIZES } from './src/constants';
import { NavigationContainer } from '@react-navigation/native';
import NavigationScreens from './src/navigation';
// import RNBootSplash from 'react-native-bootsplash';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store'

const App = _ => {
  useEffect(_ => {
    // RNBootSplash.hide(); // immediate
    // RNBootSplash.hide({ fade: true }); // fade
    SplashScreen.hide();
  });
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
};

export default App;
