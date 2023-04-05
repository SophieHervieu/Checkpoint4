import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import "./App.scss";
import Tattooartist from "./pages/Tattooartist";
import City from "./pages/City";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tattooartist" element={<Tattooartist />} />
        <Route path="/city" element={<City />} />
      </Routes>
    </div>
  );
}

export default App;
