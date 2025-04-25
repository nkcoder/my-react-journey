const Input = ({ handleInputChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleInputChange} type="radio" value={value} name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export { Input };
