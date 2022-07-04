import React, { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import ThemeContext from './context/ThemeContext';
import Button from './components/Button/Button';
import './App.sass';

function App() {
  const [themeColor, setThemeColor] = useState('dark');

  function chooseTheme(propsColor) {
    setThemeColor(propsColor);
  }
  
  const value = useMemo(() => ({ themeColor, chooseTheme }), [themeColor, chooseTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <Button />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="list" element={<ListPage />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
