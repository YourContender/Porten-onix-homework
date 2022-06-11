import { Routes, Route } from 'react-router-dom';
import HomePage          from './pages/HomePage';
import ListPage          from './pages/ListPage';
import './App.sass';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='list' element={<ListPage/>}/>
            </Routes>
        </>
    );
}

export default App;
