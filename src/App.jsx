import { Route, Routes } from 'react-router-dom';
import Entry from './components/Entry';
import TopNav from './components/TopNav';
import CallApi from './pages/CallApi';

function App() {
    return (
        <>
            <TopNav />
            <Routes>
                <Route path='/' element={<Entry />} />
                <Route path='/api' element={<CallApi />} />
            </Routes>
        </>
    );
}

export default App;
