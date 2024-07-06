import React, { useRef, useState } from 'react';
import './styles.css';

type Props = {
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
};

const InputFields: React.FC<Props> = ({ newTodo, setNewTodo, handleAdd }) => {
  const [inputText, setInputText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className='input'
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        onChange={(e) => setNewTodo(e.target.value)}
        type='text'
        value={newTodo}
        required
        placeholder='Add a Todo'
        className='input__box'
      />
      <button type='submit' className='input_submit'>
        Add
      </button>
    </form>
  );
};

export default InputFields;
