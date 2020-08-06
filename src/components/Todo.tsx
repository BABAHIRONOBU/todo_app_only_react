import React from 'react';

type TodoProps = {
  text: string;
  done: boolean;
  handleToggle: () => void;
  handleDelete: () => void;
};

const Todo: React.FC<TodoProps> = ({ text, done, handleToggle, handleDelete }) => {

  return (
    <li>
      <span
        style={{
          textDecoration: done? 'line-through': 'none',
        }}
        onClick={() => handleToggle()}
      >
        {text}
      </span>
      <button
        onClick={() => handleDelete()}
      >
        삭제
      </button>
    </li>
  );
}

export default Todo;