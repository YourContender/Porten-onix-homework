import React from 'react';

const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

const ThemeContext = React.createContext({
  colorDark: DARK_THEME,
  colorLight: LIGHT_THEME,
});

export default ThemeContext;
