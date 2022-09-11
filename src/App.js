import { Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Page/Home';
import MyOrder from "./Page/Compnent/MyOrder";
function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="myOrder" element={<MyOrder/>} />
      </Routes>
    </div>
  );
}

export default App;
