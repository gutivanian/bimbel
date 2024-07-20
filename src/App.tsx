import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import Videos from './components/Videos';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Daftar from './components/Daftar';
import Help from './components/Help';
import Login from './components/pages/Authentication/Login';
import Register from './components/pages/Authentication/Register';
import ForgotPassword from './components/pages/Authentication/ForgotPassword';
import './App.css';

const Home: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Testimonials />
      <Benefits />
      <Videos />
      <Blog />
      <Daftar />
      <Help />
      <Footer />
    </>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/bimbel-coba" element={<Home />} />
        <Route path="/bimbel-coba/login" element={<Login />} />
        <Route path="/bimbel-coba/register" element={<Register />} />
        <Route path="/bimbel-coba/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
