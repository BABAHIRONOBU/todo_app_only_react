import React from 'react';
import Todo from './Todo';
import { useTodosContext } from '../contexts/TodosContext';
import { toggleTodo, deleteTodo } from '../reducers/todos/actions';

type TodoListProps = {
  done: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ done }) => {
  const { dones, notDones, todosDispatch } = useTodosContext();

  const todos = done? dones: notDones;

  return (
    <ul>
      {
        todos.map((todo) => {
          return (
            <Todo 
              {...todo}
              handleToggle={() => {
                todosDispatch(toggleTodo(todo.id));
              }}
              handleDelete={() => {
                todosDispatch(deleteTodo(todo.id));
              }}
            />
          );
        })
      }
    </ul>
  );
}

export default TodoList;