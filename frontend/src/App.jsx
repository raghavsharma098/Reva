// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Disclaimer from './components/Disclaimer';
import './index.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="terms" element={<Terms/>}/>
        <Route path='Privacy' element={<Privacy/>}/>
        <Route path='Disclaimer' element={<Disclaimer/>}/>
      </Routes>
    </Router>
  );
}
