import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import form from './form'
import Forms from './Forms';
function App(){
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Forms/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App;
