import React, { useState } from 'react';
import { useTodosContext } from '../contexts';
import { addTodo } from '../reducers/todos/actions';

const TodoInput: React.FC = () => {
  const [todoText, setTodoText] = useState('');
  const { todosDispatch } = useTodosContext();

  return (
    <div>
      <input
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (todoText.length < 1) {
            return;
          }

          todosDispatch(addTodo(todoText));
          setTodoText('');
        }}
      >
        추가
      </button>
    </div>
  );
}

export default TodoInput;