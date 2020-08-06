import { Reducer } from 'react';
import { TodosState, TodosActionTypes, ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './types';

export const todosReducer: Reducer<TodosState, TodosActionTypes> = (prevTodos, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        nextId: prevTodos.nextId + 1,
        todos: [
          ...prevTodos.todos,
          {
            id: prevTodos.nextId,
            text: action.text,
            done: false,
          },
        ],
      };
    case DELETE_TODO:
      return {
        ...prevTodos,
        todos: prevTodos.todos.filter(todo => todo.id !== action.id)
      }
    case TOGGLE_TODO:
      return {
        ...prevTodos,
        todos: prevTodos.todos.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              done: !todo.done,
            };
          } else {
            return todo;
          }
        })
      }
    default:
      return prevTodos;
  }
}