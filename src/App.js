import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import Landing from './pages/landing/landing';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Landing />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
