import './Button.sass';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Button({ bg, setBg }) {
  return (
    <div className="button_theme">
      <button 
        type="button"
        onClick={() => setBg(!bg)}
      >
        <FontAwesomeIcon icon={bg ? faSun : faMoon} />
      </button>
    </div>
  );
}

export default Button;

Button.propTypes = {
  bg: PropTypes.bool,
  setBg: () => null
};
  
Button.defaultProps = { 
  bg: 'dark',
  setBg: () => null
};
