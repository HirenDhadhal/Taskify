import React from 'react';
import Todo from '../model';
import SingleTodo from './SingleTodo';

interface Props {
  Todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ Todos, setTodos }) => {
  return (
    <div className='todos'>
      {Todos.map((t) => (
        <SingleTodo todo={t} key={t.id} Todos={Todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
