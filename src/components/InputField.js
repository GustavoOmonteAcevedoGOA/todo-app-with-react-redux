import React, { useState } from 'react';

const InputField = () => {
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <form>
      <input
        type="text"
        name="todo"
        placeholder="Enter your todo"
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
};

export default InputField;
