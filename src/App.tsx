import React from 'react';
import { TodoInput, TodoList } from './components';
import { TodoContextProvider } from './contexts/TodosContext';

function App() {
  return (
    <TodoContextProvider>
      <TodoInput />
      <div>
        <div>todo</div>
        <TodoList done={false} />
      </div>
      <div>
        <div>done</div>
        <TodoList done={true} />
      </div>
    </TodoContextProvider>
  );
}

export default App;
