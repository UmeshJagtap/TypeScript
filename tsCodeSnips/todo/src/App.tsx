import './App.css';
import { useState } from 'react';
// import { Button } from '@/components/ui/button';
import AddTodo from '@/components/AddTodo';
import TodoList from '@/components/TodoList';
import type { Todo } from '@/types/todo';

function App() {
  // const todos = [{ id: 'D1', text: 'Complete Typescript in 2 hours' }];
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const id = Math.random().toString();
    setTodos([...todos, { id, text }]);
  };

  const removeTodoHandler = (todoId: string) => {
    const newTodo = todos.filter((todo: Todo) => {
      return todo.id !== todoId;
    });
    setTodos(newTodo);
  };
  return (
    <>
      <div className="flex items-center justify-center p-2 m-2">
        <p>Lets Build Todo</p>
      </div>
      <main className="max-w-6xl mx-auto my-10 px-5 md:px-0">
        <AddTodo onAddTodo={addTodoHandler} />
        <TodoList items={todos} onRemoveTodo={removeTodoHandler} />
      </main>
      {/* <Button></Button> */}
    </>
  );
}

export default App;

// Default Vite App --------------------------<<<<<

// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// function App() {
// const [count, setCount] = useState(0);
// return (
// <>
{
  /* <div className="flex justify-center gap-4 mb-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
}
//     </>
//   );
// }
//
// export default App;
