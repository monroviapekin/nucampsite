import { useEffect } from 'react';
import { useDispatch     } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components';
import { AboutPage, CampsiteDetailPage, CampsitesDirectoryPage, ContactPage, HomePage } from './pages';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import './App.css';

function App() {
   const dispatch = useDispatch();
   
   useEffect(() => {
    dispatch(fetchCampsites());
   }, [dispatch]);

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
                <Route
                    path='directory/:campsiteId'
                    element={<CampsiteDetailPage />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
