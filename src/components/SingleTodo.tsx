import React, { useEffect, useRef, useState } from 'react';
import Todo from '../model';
import { FaEdit } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

interface Props {
  todo: Todo;
  Todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, Todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const editTodo = () => {
    setEdit(true);
  };
  const completeEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setEdit(false);
    let arr: Todo[] = Todos.map((t) =>
      t.id == todo.id ? { id: t.id, todo: editValue, isDone: t.isDone } : t
    );
    setTodos(arr);
  };
  const toggleIsDone = () => {
    console.log('doneeee');

    let updatedTodo: Todo[] = Todos.map((t) => {
      return t.id != todo.id
        ? t
        : { id: todo.id, todo: todo.todo, isDone: !todo.isDone };
    });
    setTodos(updatedTodo);
  };
  const deleteTodo = () => {
    setTodos(Todos.filter((t) => t.id != todo.id));
  };
  return (
    <form className='todos__single' onSubmit={completeEdit}>
      {' '}
      {edit ? (
        <input
          ref={inputRef}
          type='text'
          value={editValue}
          className='todos__single--text'
          onChange={(e) => {
            setEditValue(e.target.value);
          }}
        />
      ) : todo.isDone ? (
        <s className='todos__single--text'>{todo.todo}</s>
      ) : (
        <span className='todos__single--text'>{todo.todo}</span>
      )}
      <div>
        <span
          className='icon'
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className='icon' onClick={deleteTodo}>
          <AiFillDelete />
        </span>
        <span className='icon' onClick={toggleIsDone}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
