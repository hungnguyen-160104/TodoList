import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Import file CSS
import Header from './components/Header.jsx';
import Features from './components/Features.jsx';
import Testimonials from './components/Testimonials.jsx';
import CTA from './components/CTA.jsx';
import AboutUs from './components/AboutUs.jsx';
import Contact from './components/Contact.jsx';
import Login from './auth/Login.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Trang Chính */}
        <Route 
          path="/" 
          element={
            <div className="App">
              <Header /> {/* Header chỉ hiển thị trên trang chính */}
              <CTA />
              <Features />
              <Testimonials />
              <AboutUs />
              <Contact />
            </div>
          } 
        />

        {/* Trang Đăng Nhập */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
