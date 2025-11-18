import React from 'react';
import Home from './Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from './Master/Layout';


const App = () => {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
  </Route>
</Routes>

    </BrowserRouter>
  );
}



export default App;


