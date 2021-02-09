import { ADD_TODO, ADD_USERNAME, DELETE_TODO, UPDATE_TODO, } from './constants'

export const addTodo = (payload) => ({type:ADD_TODO, payload})
export const updateTodo = (payload) => ({type:UPDATE_TODO, payload})
export const deleteTodo = (payload) => ({type:DELETE_TODO, payload})
export const addUserName = (payload) => ({type:ADD_USERNAME, payload})