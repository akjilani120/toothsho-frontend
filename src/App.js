import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Page/Home';
import MyOrder from "./Page/Compnent/MyOrder";
import { useState } from "react";
function App() {
  const [spcialPrice , setSpcialPrice] = useState(1)
  const [totalPrice , setTotalPrice] = useState(1)
  return (
   
    <div className="App">
    
      <Routes>
        <Route path="/"  element={<Home  setSpcialPrice={setSpcialPrice} setTotalPrice={setTotalPrice} />} />
        <Route path="myOrder"  element={<MyOrder spcialPrice={spcialPrice} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />} />
      </Routes>
    </div>
  );
}

export default App;
