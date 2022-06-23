import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import TestContect from './context';
import './App.sass';

function App() {
  const [bg, setBg] = useState(false);
  const theme = bg ? 'light' : 'dark';

  return (
    <TestContect.Provider value={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="list" element={<ListPage bg={bg} setBg={setBg} />} />
      </Routes>
    </TestContect.Provider>
  );
}

export default App;
