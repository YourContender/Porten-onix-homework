import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import ThemeContext from './context/ThemeContext';
import Button from './components/Button/Button';
import './App.sass';

function App() {
  const [init, setInit] = useState({
    themeColor: 'dark', // eslint-disable-line
    chooseTheme: chooseTheme, // eslint-disable-line
  });
 
  function chooseTheme(propsColor) {
    setInit({ 
      ...init,
      themeColor: propsColor 
    }); // eslint-disable-line
  }

  return (
    <ThemeContext.Provider value={init}>
      <Button />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="list" element={<ListPage />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
