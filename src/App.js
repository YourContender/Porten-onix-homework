import React, { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import './App.sass';
import TestContect from './context';

function App() {
  const [bg, setBg] = useState(false);
  const { colorLight, colorDark } = useContext(TestContect);

  return (
    <TestContect.Provider value={bg ? colorLight : colorDark}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="list" element={<ListPage bg={bg} setBg={setBg} />} />
      </Routes>
    </TestContect.Provider>
  );
}

export default App;
