import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './Button.sass';
import { useContext, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';

function Button() {
  const [bool, setBool] = useState(false);
  const { chooseTheme } = useContext(ThemeContext);

  const testFunc = () => {
    setBool(!bool);
    chooseTheme(bool ? 'dark' : 'light');
  };

  return (
    <div className="button_theme">
      <button 
        type="button"
        onClick={() => testFunc()}
      >
        <FontAwesomeIcon icon={bool ? faSun : faMoon} />
      </button>
    </div>
  );
}

export default Button;