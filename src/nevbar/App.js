import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Service from './Service';
import About from './About'; 
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path='/about' element={<About/>}/>
   </Routes>
    </BrowserRouter>
  )
}

export default App