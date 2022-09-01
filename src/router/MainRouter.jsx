import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PortfolioLanding from '../dark/PortfolioLanding';

function MainRouter() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PortfolioLanding />} />
    </Routes>
  );
}

export default MainRouter;
