import About from './pages/About';
import Home from './pages/Home'
import {Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Features from './pages/Features';
import Articles from './pages/Articles';
import Video from './pages/Video';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Features' element={<Features/>}/>
        <Route path='/Articles' element={<Articles/>}/>
        <Route path='/Video' element={<Video/>}/>
      </Routes>
      
    </>
  )
}

export default App
