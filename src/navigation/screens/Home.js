import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, AsyncStorage, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import TodoCard from '../../components/TodoCard';
import { COLORS, SIZES, FONTS } from '../../constants';
import { H2, H4, Small } from '../../components/customText';
// import Swipeable from 'react-native-gesture-handler/Swipeable';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useSelector } from 'react-redux';

const Home = props => {
  const {
    navigation: { navigate },
  } = props;

  const todoLevels = ['High', 'Medium', 'Low'];
  const [selectedLevel, setSelectedLevel] = useState('High');
  const [state, setState] = useState(1);
  const { userName = '', todos = [] } = useSelector(store => store);
  console.log({userName, todos})
  const [session, setSession] = useState('');

  const handleSwipe = gestureName => {
    if (['SWIPE_UP', 'SWIPE_DOWN'].includes(gestureName)) return;
    const sign = gestureName === 'SWIPE_LEFT' ? 1 : -1;
    const selectLevel = todoLevels[todoLevels.indexOf(selectedLevel) + sign];
    if (!selectLevel) return;
    setSelectedLevel(selectLevel);
  };

  useEffect(_ => {
    const hours = new Date().getHours();
    if (hours >= 0 && hours < 12) setSession('Morning');
    else if (hours >= 12 && hours < 18) setSession('Afternoon');
    else if (hours >= 18 && hours < 24) setSession('Evening');
  }, []);

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
          <H2 style={{ color: COLORS.white1 }}>Hi, {userName}...</H2>
          <Small style={{ color: COLORS.white1, fontSize: 12, marginRight: 'auto' }}> Good {session}!</Small>
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
      <GestureRecognizer onSwipe={handleSwipe}>
        <View style={{ backgroundColor: COLORS.white1, height: '100%' }}>
          <FlatList
            data={todos.filter(todo => todo.level === selectedLevel.toLowerCase())}
            renderItem={t => <TodoCard todo={t.item} navigate={navigate} />}
            keyExtractor={item => `${item.id}`}
          />
        </View>
      </GestureRecognizer>
    </View>
  );
};

export default Home;
