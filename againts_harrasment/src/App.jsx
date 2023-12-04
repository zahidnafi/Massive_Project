import About from './pages/About';
import Home from './pages/Home'
import {Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Features from './pages/Features';
import Articles from './pages/Articles';
import Video from './pages/Video';
import Articles5 from './pages/Artikel/Articles5';
import Articles6 from './pages/Artikel/Articles6';
import ChangePass from './pages/Change_Pass';
import Articles1 from './pages/Artikel/Articles1';
import ToolsPages from './pages/ToolsPages';


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
        <Route path='/Tools' element={<ToolsPages/>}/>
        <Route path='/ChangePass' element={<ChangePass/>}/>
        <Route path='/Artikel1' element={<Articles1/>}/>
        <Route path='/Artikel5' element={<Articles5/>}/>
        <Route path='/Artikel6' element={<Articles6/>}/>

      </Routes>
      
    </>
  )
}

export default App
