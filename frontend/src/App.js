import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';



function App() {
  return (
    <Router>
      <Layout/>
      <Routes>
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/" element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
