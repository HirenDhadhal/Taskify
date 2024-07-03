import { useState } from 'react';
import './App.css';
import Todo from './model';
import InputFields from './components/InputFields';

function App() {
  const [newTodo, setNewTodo] = useState<string>('');
  const [Todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([...Todos, { id: Date.now(), todo: newTodo, isDone: false }]);
    setNewTodo('');
  };
  return (
    <>
      <InputFields
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleAdd={handleAdd}
      />
      {Todos.map((t) => (
        <li key={t.id}>{t.todo}</li>
      ))}
    </>
  );
}

export default App;
