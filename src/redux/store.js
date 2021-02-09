import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducer';
import thunk from 'redux-thunk'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(async _ => {
  const stringifiedData = JSON.stringify(store.getState());
  await AsyncStorage.setItem('store', stringifiedData);
});

const getInitialState = _ => async dispatch => {
  const payload = JSON.parse((await AsyncStorage.getItem('store')) || `{ userName: null, todos: [] }`);
  dispatch({type: 'SET_INITIAL_STATE', payload})
}
// store.dispatch(getInitialState());

export { store };
