import { TodosActionTypes, ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './types';

export function addTodo(text: string): TodosActionTypes {
  return {
    type: ADD_TODO,
    text,
  }
}

export function deleteTodo(id: number): TodosActionTypes {
  return {
    type: DELETE_TODO,
    id,
  }
}

export function toggleTodo(id: number): TodosActionTypes {
  return {
    type: TOGGLE_TODO,
    id,
  }
}