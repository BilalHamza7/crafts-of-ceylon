import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import Homepage from './home/homepage';
import './index.css';
import About from './home/about';
import Contact from './home/contact';
import CustomerLogIn from './authentication/customerLogIn';
import CustomerSignIn from './authentication/customerSignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customerLogIn" element={<CustomerLogIn />} />
          <Route path="/customerSignIn" element={<CustomerSignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
