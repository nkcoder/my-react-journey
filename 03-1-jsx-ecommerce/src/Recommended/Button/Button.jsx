import './Button.css';
const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} className="btn" value={value}>
      {title}
    </button>
  )
};

export { Button };
