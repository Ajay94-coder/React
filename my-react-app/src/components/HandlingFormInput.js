import React, { useState } from 'react';

export default function HandlingFormInput() {
  const [text, setText] = useState('ajay');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{text}</h1>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
      />
    </div>
  );
}
