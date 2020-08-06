import React, { createContext, useContext, useMemo, Dispatch } from 'react';
import { useTodosReducer } from '../reducers';
import { TodoType, TodosActionTypes } from '../reducers/todos/types';

export type TodosContextType = {
  todos: TodoType[];
  todosDispatch: Dispatch<TodosActionTypes>;
}

const defaultValue = {
  todos: [],
  todosDispatch: () => {},
};

const TodosContext = createContext<TodosContextType>(defaultValue);

export const TodoContextProvider: React.FC = ({ children }) => {
  const [todosState, todosDispatch] = useTodosReducer();

  return (
    <TodosContext.Provider value={{ todos: todosState.todos, todosDispatch }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodosContext() {
  const { todos, todosDispatch } = useContext(TodosContext);

  const [ dones, notDones ] = useMemo<[TodoType[], TodoType[]]>(() => {
    const dones: TodoType[] = [];
    const notDones: TodoType[] = [];

    todos.forEach((todo) => {
      if (todo.done) {
        dones.push(todo);
      } else {
        notDones.push(todo);
      }
    })

    return [ dones, notDones ];
  }, [todos]);

  return {
    todos,
    dones,
    notDones,
    todosDispatch,
  }
}

export default TodosContext;