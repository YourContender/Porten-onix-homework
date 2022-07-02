import React from 'react';

const DARK_THEME = 'dark';

const ThemeContext = React.createContext({
  color: DARK_THEME,
  toggleColor: () => {}
});

export default ThemeContext;
