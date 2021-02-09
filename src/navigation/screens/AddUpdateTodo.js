import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SHADOWS, SIZES } from '../../constants';
import { Body, CheckBox, Input, ListItem, Textarea, Text, Left, Right, Radio } from 'native-base';
import { addTodo, updateTodo } from '../../redux/actions';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';

const AddUpdateTodo = ({ navigation, route }) => {
  const id = route?.params?.id || '';
  const title = route?.params?.title || '';
  const text = route?.params?.text || '';
  const level = route?.params?.level || '';

  const [isDisabled, setIsDisabled] = useState();
  const [todo, setTodo] = useState({});
  const dispatch = useDispatch();
  const handleChange = (name, value) => setTodo({ ...todo, [name]: value });

  useEffect(
    _ => {
      setIsDisabled(id ? true : false);
      setTodo({ id, title, text, level });
    },
    [id]
  );

  return (
    <>
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <TouchableOpacity onPress={_ => navigation?.goBack()}>
          <Icon name='keyboard-backspace' size={30} style={{ color: COLORS.green1, padding: 5 }} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={_ => {
            if (isDisabled) return setIsDisabled(false);
            if (id) return dispatch(updateTodo(todo));
            const id = uuid();
            dispatch(addTodo({ ...todo, id }));
            navigation.navigate('Home')
          }}
        >
          <Icon
            name={isDisabled ? 'pencil-outline' : 'content-save-alert-outline'}
            size={isDisabled ? 30 : 35}
            style={{ color: COLORS.green1, backgroundColor: COLORS.green2, padding: 5, borderRadius: 50, ...SHADOWS }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <ListItem>
            <Left>
              <Text>High</Text>
            </Left>
            <Right>
              <Radio disabled={isDisabled} selected={'high' === todo.level} onPress={_ => handleChange('level', 'high')}/>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Medium</Text>
            </Left>
            <Right>
              <Radio disabled={isDisabled} selected={'medium' === todo.level} onPress={_ => handleChange('level', 'medium')} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Low</Text>
            </Left>
            <Right>
              <Radio disabled={isDisabled} selected={'low' === todo.level} onPress={_ => handleChange('level', 'low')} />
            </Right>
          </ListItem>
        </View>
        <View style={{ margin: 10, height: 50 }}>
          <Input
            maxLength={30}
            placeholder='Title'
            style={{
              color: COLORS.green1,
              letterSpacing: 1,
              backgroundColor: COLORS.green2,
              borderRadius: SIZES.radius1,
            }}
            value={todo.title}
            disabled={isDisabled}
            onChangeText={value => handleChange('title', value)}
          />
        </View>
        <View style={{ margin: 10, height: 50 }}>
          <Textarea
            placeholder='Text'
            rowSpan={20}
            style={{
              color: COLORS.green1,
              letterSpacing: 1,
              fontSize: 22,
              backgroundColor: COLORS.green2,
              borderRadius: SIZES.radius1,
            }}
            value={todo.text}
            disabled={isDisabled}
            onChangeText={value => handleChange('text', value)}
          />
        </View>
      </View>
    </>
  );
};

export default AddUpdateTodo;
