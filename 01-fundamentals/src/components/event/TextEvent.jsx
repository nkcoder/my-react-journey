import React from 'react'

const TextEvent = () => {
  const handleCopy = () => {
    console.log("Copied");
  };

  const handlePaste = () => {
    console.log("Pasted");
  };

  const handleMouseOver = () => {
    console.log("Mouse Over");
  };

  const handleClick = () => {
    console.log("Clicked");
    // alert("Clicked");
  };

  const handleKeyDown = (event) => {
    console.log("KeyDown", event.key);
    if (event.key === "Enter") {
      alert("Enter key pressed");
    }
  };

  return (
    <div>
      <p onCopy={handleCopy} onPaste={handlePaste} onMouseOver={handleMouseOver}>Hello World</p>
      <button onClick={handleClick} >Click Me</button>
      <input type="text" onKeyDown={handleKeyDown} />
    </div>
  );
};

export default TextEvent