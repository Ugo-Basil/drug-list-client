import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddDrug from "./pages/AddDrug";
import Home from "./pages/Home";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adddrug" element={<AddDrug />} />
      </Routes>
    </Router>
  );
}

export default App;
