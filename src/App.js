import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Page/Home';
import MyOrder from "./Page/Compnent/MyOrder";
import { useState } from "react";
function App() {
  const [spcialPrice , setSpcialPrice] = useState(0)
  return (
   
    <div className="App">
    
      <Routes>
        <Route path="/"  element={<Home  setSpcialPrice={setSpcialPrice} />} />
        <Route path="myOrder"  element={<MyOrder spcialPrice={spcialPrice} />} />
      </Routes>
    </div>
  );
}

export default App;
