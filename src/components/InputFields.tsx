import React, { useRef, useState } from 'react';
import Todo from '../model';

type Props = {
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
};

const InputFields: React.FC<Props> = ({ newTodo, setNewTodo, handleAdd }) => {
  const [inputText, setInputText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <h1>Taskify</h1>
      <form
        onSubmit={(e) => {
          handleAdd(e);
        }}
      >
        <input
          ref={inputRef}
          onChange={(e) => setNewTodo(e.target.value)}
          type='text'
          value={newTodo}
          required
          placeholder='Add a Todo'
        />
        <button type='submit'>Add Todo</button>
      </form>
    </>
  );
};

export default InputFields;
