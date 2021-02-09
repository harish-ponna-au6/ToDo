import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';
import { COLORS, FONTS, SIZES } from '../constants';
import { deleteTodo } from '../redux/actions';
import { P } from './customText';

const TodoCard = props => {
  const {
    todo: { id, title, text },
    navigate,
  } = props;

  const dispatch = useDispatch()
  
  const handlePress = _ => navigate('AddUpdateTodo', { id, title, text });
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 10 }}>
      <TouchableOpacity onPress={handlePress} style={{ flex: 7 }}>
        <View
          style={{
            backgroundColor: COLORS.green2,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: SIZES.radius1,
            paddingVertical: 15,
            paddingHorizontal: 10,
          }}
          >
          <P style={{ color: COLORS.green1 }}>{title}</P>
          <Icon name='eyeo' size={30} color={COLORS.green1} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={_ => dispatch(deleteTodo({ id }))} style={{ width: '10%', flex: 1, alignItems: 'flex-end' }}>
        <Icon name='delete' size={30} color={COLORS.red1} />
      </TouchableOpacity>
    </View>
  );
};


export default TodoCard;
