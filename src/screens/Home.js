import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES, FONTS } from '../constants';

const Home = props => {
  return (
    <View style={{ backgroundColor: COLORS.green1, borderRadius: SIZES.radius }}>
      <View style={{ padding: SIZES.padding3, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ ...FONTS.h3, color: COLORS.white1 }}>
          Hi, Harish...
          <Text style={{ ...FONTS.p, color: COLORS.white1, fontSize: 12 }}> Good Morning!</Text>
        </Text>
        <Icon name='search1' size={25} color={COLORS.white1} />
      </View>
    </View>
  );
};

export default Home;
