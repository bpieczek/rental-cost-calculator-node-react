import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navabar';
import Footer from './components/Footer';
import Home from './pages/home';
import Calculator from './pages/calculator';
import Rentcar from './pages/rentcar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/calculator' element={ <Calculator />} />
          <Route path='/rentcar' element={ <Rentcar />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
