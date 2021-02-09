import React from 'react';
import { useState } from 'react';
import { AsyncStorage, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { H2 } from '../../components/customText';
import { COLORS, SIZES } from '../../constants';
import { addUserName } from '../../redux/actions';

const Login = ({ navigation: { navigate }, route }) => {
  const [userName, setUserName] = useState(null);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.green1,
      }}
    >
      <TextInput
        style={{
          borderRadius: SIZES.radius1,
          fontSize: 20,
          backgroundColor: COLORS.white1,
          color: COLORS.green1,
          width: 300,
          paddingHorizontal: 10,
        }}
        placeholder='User Name'
        maxLength={15}
        value={userName}
        onChangeText={value => setUserName(value)}
      />

      {userName && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={_ => {
            dispatch(addUserName({ userName }));
            navigate('Home');
          }}
        >
          <H2 style={{ color: COLORS.white1 }}>Next</H2>
          <Icon style={{ color: COLORS.white1 }} name='arrow-right' size={30} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Login;
