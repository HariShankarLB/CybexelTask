import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './NavBar.css';
import cycle from './cycle.png'
import Home from './Home';
import 'bootstrap-icons/font/bootstrap-icons.css';

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function NavBar() {
  return (
    <div className='container'>
      <BrowserRouter >
      <nav className='d-inline-block justify-content-center collapse navbar-collapse'>
        <div className=''>
        <img  src={cycle} className="cycle-image" alt="logo" />
        <Link className='text-decoration-none px-5' to="/">Home</Link> 
        <Link className='text-decoration-none px-5' to="/about">About</Link> 
        <Link className='text-decoration-none px-5' to="/contact">Contact</Link>
        <span className='glyphicon glyphicon-user'></span>
        </div>
        
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default NavBar;

