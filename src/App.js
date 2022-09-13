import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Page/Home';
import MyOrder from "./Page/Compnent/MyOrder";
import { useState } from "react";
import ThankPage from "./Page/Compnent/ThankPage";
function App() {
 
  return (
   
    <div className="App">
    
      <Routes>
        <Route path="/"  element={<Home   />} />
        <Route path="/myOrder"  element={<MyOrder/>} />
        <Route path="/thankPage" element={<ThankPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
