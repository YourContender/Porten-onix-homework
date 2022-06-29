import React, { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import ThemeContext from './context/ThemeContext';
import './App.sass';

function App() {
  const [bg, setBg] = useState(false);
  const context = useContext(ThemeContext);
  const theme = bg ? context.colorLight : context.colorDark;

  return (
    <ThemeContext.Provider value={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="list" element={<ListPage bg={bg} setBg={setBg} />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;