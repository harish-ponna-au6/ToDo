import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from '../constants';
import Home from '../screens/Home';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();
const { Navigator, Screen } = Tab;

const tabsArray = [
  {
    key: 1,
    name: 'Home',
    icon: 'home-circle-outline',
    component: Home,
  },
  //   {
  //     key: 2,
  //     name: 'Add',
  //     icon: 'Plus',
  //     component: AddTodo,
  //   },
  //   {
  //     key: 3,
  //     name: 'Account',
  //     icon: 'account-circle',
  //     component: Account,
  //   },
];

const BottomTabs = props => {
  return (
    <>
      <Navigator
        initialRouteName='Home'
        tabBarOptions={{
          showLabel: false,
          iconStyle: {
            activeBackgroundColor: COLORS.green1,
            inactiveBackgroundColor: COLORS.green2,
          },
          style: {
            borderBottomLeftRadius: SIZES.radius1,
            borderBottomRightRadius: SIZES.radius1,
          },
        }}
      >
        {tabsArray.map(({ key, name, icon, component: Component }) => (
          <Screen
            key={key}
            name={name}
            component={Component}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={{ position: 'relative', bottom: focused ? 10 : 0 }}>
                  <Icon name={icon} size={focused ? 50 : 40} color={focused ? COLORS.green1 : COLORS.green2} />
                </View>
              ),
            }}
          />
        ))}
      </Navigator>
    </>
  );
};

export default BottomTabs;
