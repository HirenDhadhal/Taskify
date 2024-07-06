import { useState } from 'react';
import './App.css';
import Todo from './model';
import InputFields from './components/InputFields';
import TodoList from './components/TodoList';

function App() {
  const [newTodo, setNewTodo] = useState<string>('');
  const [Todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([...Todos, { id: Date.now(), todo: newTodo, isDone: false }]);
    setNewTodo('');
  };
  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputFields
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleAdd={handleAdd}
      />
      <TodoList Todos={Todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
