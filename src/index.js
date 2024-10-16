import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import Homepage from './home/homepage';
import './index.css';
import About from './home/about';
import Contact from './home/contact';
import CustomerLogIn from './customerAuth/customerLogIn';
import CustomerSignIn from './customerAuth/customerSignIn';
import Products from './products/products';
import CustomerDashboard from './customerDashboard/customerDashboard';
import CustomerOrders from './customerDashboard/customerOrders';
import CustomerProfile from './customerDashboard/customerProfile';

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
          <Route path="/products" element={<Products />} />
          <Route path="/customerDashboard" element={<CustomerDashboard />} >
            <Route path="/customerDashboard/customerOrders" element={<CustomerOrders />} />
            <Route path="/customerDashboard/customerProfile" element={<CustomerProfile />} />
          </Route>
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
