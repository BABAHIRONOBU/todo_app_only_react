import { useReducer } from 'react';
import { todosReducer } from './reducers';
import { TodosState, TodoType } from './types';

const initTodos: TodoType[] = [
  {
    id: 1,
    text: 'a',
    done: true,
  },
  {
    id: 2,
    text: 'b',
    done: false,
  }
];

const initialTodos: TodosState = {
  nextId: initTodos.length + 1,
  todos: initTodos,
};

export default function useTodosReucer() {
  return useReducer(todosReducer, initialTodos);
}