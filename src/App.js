import { Routes, Route } from 'react-router-dom';
import HomePage          from './pages/HomePage';
import ListPage          from './pages/ListPage';
import Header            from './components/Header/Header';
import Nav               from './components/Nav/Nav';
import './App.sass';

function App() {
    return (
        <>
            <Header/>
            <Nav/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='list' element={<ListPage/>}/>
            </Routes>
        </>
    );
}

export default App;
