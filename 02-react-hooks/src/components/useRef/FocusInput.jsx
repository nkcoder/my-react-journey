import React, { useRef } from 'react';

// Reference a DOM element
// https://react.dev/learn/manipulating-the-dom-with-refs
const FocusInput = () => {
  const inputRef = useRef(null);

  console.log(inputRef);

  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.value = 'Hello';
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default FocusInput;
