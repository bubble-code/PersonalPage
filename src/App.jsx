/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import MainRouter from './router/MainRouter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
