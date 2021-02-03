import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import TodoCard from '../../components/TodoCard';
import { COLORS, SIZES, FONTS } from '../../constants';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import { H2, H4, P, Small } from '../../components/customText';

export const todos = {
  High: [
    { id: 1, title: 'this is 1 high level todo', text: 'This is 1 high level text' },
    { id: 2, title: 'this is 2 high level todo', text: 'This is 1 high level text' },
  ],
  Medium: [
    { id: 3, title: 'this is 3 medium level todo', text: 'This is 1 medium level text' },
    { id: 4, title: 'this is 4 medium level todo', text: 'This is 1 medium level text' },
  ],
  Low: [
    { id: 5, title: 'this is 5 low level todo', text: 'This is 5 low level text' },
    { id: 6, title: 'this is 6 low level todo', text: 'This is 6 low level text' },
  ],
};

const Home = props => {
  const {
    navigation: { navigate },
  } = props;

  const todoLevels = ['High', 'Medium', 'Low'];
  const [selectedLevel, setSelectedLevel] = useState('High');

  return (
    <View>
      <View style={{ backgroundColor: COLORS.green1, borderRadius: SIZES.radius2 }}>
        <View
          style={{
            padding: SIZES.padding3,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}
        >
          <H2 style={{ color: COLORS.white1 }}>Hi, Harish...</H2>
          <Small style={{ color: COLORS.white1, fontSize: 12, marginRight: 'auto' }}> Good Morning!</Small>
          <TouchableOpacity>
            <Icon name='search1' onPress={_ => navigate('Search')} size={25} color={COLORS.white1} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            height: 50,
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          {todoLevels.map((t, i) => (
            <TouchableOpacity key={i}>
              <H4
                onPress={_ => setSelectedLevel(t)}
                style={{
                  ...FONTS.h4,
                  color: COLORS.white1,
                  borderBottomWidth: selectedLevel === t ? 2 : 0,
                  borderBottomColor: COLORS.white1,
                  bottom: selectedLevel === t ? 5 : 0,
                }}
              >
                {t}
              </H4>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{ backgroundColor: COLORS.white1, height: '100%' }}>
        <FlatList
          data={todos[selectedLevel]}
          renderItem={t => <TodoCard todo={t.item} />}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    </View>
  );
};

export default Home;
