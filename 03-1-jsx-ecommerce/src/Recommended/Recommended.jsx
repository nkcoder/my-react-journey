import { Button } from './Button/Button';
import './Recommended.css';

const Recommended = ({ handleClick }) => {
  return (
    <div className="recommended">
      <h2>Recommended</h2>
      <div className="recommended-flex">
        <Button onClickHandler={handleClick} value="" title="All" />
        <Button onClickHandler={handleClick} value="Nike" title="Nike" />
        <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Button onClickHandler={handleClick} value="Puma" title="Puma" />
        <Button onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  );
};

export { Recommended };
