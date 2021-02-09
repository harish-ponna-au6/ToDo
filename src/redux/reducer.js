import { AsyncStorage } from 'react-native';
import { ADD_TODO, ADD_USERNAME, DELETE_TODO, SET_INITIAL_STATE, UPDATE_TODO } from './constants';



const initialState = { userName: null, todos: [] };

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log({ state, type, payload });

  switch (type) {
    case SET_INITIAL_STATE: {
      return payload;
    }

    case ADD_TODO: {
      return { ...state, todos: [...state.todos, payload] };
    }
    case UPDATE_TODO: {
      const todo = state.todos.find(todo => todo.id === payload.id);
      todo.level = payload.level;
      todo.title = payload.title;
      todo.text = payload.text;
      return { ...state };
    }
    case DELETE_TODO: {
      const todoIndex = state.todos.findIndex(todo => todo.id === payload.id);
      state.todos.splice(todoIndex, 1);
      return { ...state };
    }
    case ADD_USERNAME: {
      state.userName = payload.userName;
      return { ...state };
    }
    default:
      return state;
  }
};
