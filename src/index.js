import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import Home from './features/home';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"> {/** element={<Layout />} */}
          <Route index element={<Home />} /> 
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
