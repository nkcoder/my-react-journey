import './Input.css';

const Input = ({ handleInputChange, value, title, name, color }) => {
  const checkmarkClass = color !== '#333' ? 'checkmark color-checkmark' : 'checkmark';
  
  return (
    <label className="sidebar-label-container">
      <input onChange={handleInputChange} type="radio" value={value} name={name} />
      <span className={checkmarkClass} style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export { Input };
