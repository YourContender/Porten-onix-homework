import React, { useMemo, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ListPage from './pages/ListPage';
import ThemeContext from './context/ThemeContext';
import Button from './components/Button/Button';
import withLayout from './components/Layout/withLayout';
import i18n from './i18n/i18n';
import './App.sass';

function App() {
  const [themeColor, setThemeColor] = useState('dark');
  const HomePageComponent = withLayout(HomePage);
  const ListPageComponent = withLayout(ListPage);

  function chooseTheme(propsColor) {
    setThemeColor(propsColor);
  }
  
  const value = useMemo(() => ({ themeColor, chooseTheme }), [themeColor, chooseTheme]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <ThemeContext.Provider value={value}>
      <Button />
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ua')}>UA</button>
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="list" element={<ListPageComponent />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
