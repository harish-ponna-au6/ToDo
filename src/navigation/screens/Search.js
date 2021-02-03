import React from 'react';
import { useState } from 'react';
import { View, TextInput, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Label,
  List,
  ListItem,
  Text,
  Right,
  Left,
  Toast,
} from 'native-base';
import { todos } from './Home';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Search = props => {
  const {
    navigation: { goBack },
  } = props;
  const [searchedItems, setSearchedItems] = useState([]);

  let interval;
  const handleChangeText = t => {
    clearTimeout(interval);
    if (!t) return setSearchedItems([]);
    interval = setTimeout(_ => {
      let results = [];
      const reg = new RegExp(t, 'i');
      for (let level in todos) {
        const arr = todos[level].filter(t => reg.test(t.title));
        results = [...results, ...arr];
      }
      setSearchedItems(results);
    }, 300);
  };

  return (
    <>
      <Container style={{ flex: 1 }}>
        <Item style={{ paddingHorizontal: 10, marginVertical: 10 }} floatingLabel>
          <Icon active name='arrow-back' onPress={_ => goBack()} />
          <Label style={{ paddingHorizontal: 10 }}>Search Todo with Title... </Label>
          <Input onChangeText={handleChangeText} />
          <Icon active name='search' />
        </Item>
      </Container>
      <TouchableWithoutFeedback onPress={_ => Keyboard.dismiss()}>
        <Container style={{ flex: 7 }}>
          <List style={{ marginVertical: 10 }}>
            {searchedItems.map((t, i) => (
              <TouchableOpacity key={i}>
                <ListItem>
                  <Left>
                    <Text>{t.title}</Text>
                  </Left>
                  <Right>
                    <Icon name='arrow-forward' />
                  </Right>
                </ListItem>
              </TouchableOpacity>
            ))}
          </List>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
};
export default Search;
