import { BaseAction } from '../types';

export type TodoType = {
  id: number;
  text: string;
  done: boolean;
}

export type TodosState = {
  nextId: number;
  todos: TodoType[];
}

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export type AddTodoAction = BaseAction<typeof ADD_TODO> & {
  text: string;
}

export type DeleteTodoAction = BaseAction<typeof DELETE_TODO> & {
  id: number;
}

export type ToggleTodoAction = BaseAction<typeof TOGGLE_TODO> & {
  id: number;
}

export type TodosActionTypes = AddTodoAction | DeleteTodoAction | ToggleTodoAction;