// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Work from "./Components/Work";
import  "./Style/Work.css";





function App() {
  return (
    <Router>
   
    <Routes>
      <Route path="/" element={<Work />} />

      
    </Routes>
  </Router>
  );
}

export default App;
