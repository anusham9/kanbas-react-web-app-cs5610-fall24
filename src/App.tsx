import React from 'react';
import './App.css';
import Kanbas from './Kanbas';
import Labs from './Labs';
import { HashRouter, Link, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
