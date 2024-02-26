
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './App.css';

import NavbarTop from './components/navbarTop/NavbarTop';
import HomePage from './pages/HomePage/HomePage';
import Blogs from './pages/Blogs/Blogs';
import Podcast from './pages/Podcast/Podcast';
import Events from './pages/Events/Events';
import Contest from './pages/Contest/Contest';
import Gallery from './pages/Gallery/Gallery';
import Team from './pages/Team/Team';

function App() {
  return (
    <>
      <NavbarTop />
      
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/blog' element={<Blogs />}/>
        <Route path='/podcast' element={<Podcast />}/>
        <Route path='/events' element={<Events />} />
        <Route path='/contest' element={<Contest />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/team' element={<Team />}/>
      </Routes>
    </>
  )
}

export default App
