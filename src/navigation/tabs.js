import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from '../constants';
import Home from './screens/Home';
import { View } from 'react-native';
import AddUpdateTodo from './screens/AddUpdateTodo';

const Tab = createBottomTabNavigator();
const { Navigator, Screen } = Tab;

const tabsArray = [
  {
    key: 1,
    name: 'Home',
    icon: 'home-circle-outline',
    component: Home,
  },
  {
    key: 2,
    name: 'AddUpdateTodo',
    icon: 'sticker-plus-outline',
    component: AddUpdateTodo,
  },
  //   {
  //     key: 3,
  //     name: 'Account',
  //     icon: 'account-circle',
  //     component: Account,
  //   },
];

const tabBarOptions = {
  showLabel: false,
  iconStyle: {
    activeBackgroundColor: COLORS.green1,
    inactiveBackgroundColor: COLORS.green2,
  },
  style: {
    borderBottomLeftRadius: SIZES.radius1,
    borderBottomRightRadius: SIZES.radius1,
  },
};

const tabScreenOptions = icon => ({
  tabBarVisible: icon === 'sticker-plus-outline' ? false : true,
  tabBarIcon: ({ focused }) => (
    <View style={{ position: 'relative' }}>
      <Icon name={icon} size={focused ? 50 : 40} color={focused ? COLORS.green1 : COLORS.green2} />
    </View>
  ),
});

const renderTabScreens = _ => {
  return tabsArray.map(({ key, name, icon, component: Component }) => (
    <Screen
      key={key}
      name={name}
      component={Component}
      options={tabScreenOptions(icon)}
    />
  ));
};

const BottomTabs = props => {
  return (
    <>
      <Navigator initialRouteName='Home' tabBarOptions={tabBarOptions}>
        {renderTabScreens()}
      </Navigator>
    </>
  );
};

export default BottomTabs;
