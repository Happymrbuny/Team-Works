import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import ToolDirectoryPage from './pages/ToolDirectoryPage';
import TeamGeneratorPage from './pages/TeamGeneratorPage';
import BracketGeneratorPage from './pages/BracketGeneratorPage';
import CoinTossPage from './pages/CoinTossPage';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<ToolDirectoryPage />} />
          <Route path='Team-Generator' element={<TeamGeneratorPage />} />
          <Route path='Bracket-Generator' element={<BracketGeneratorPage />} />
          <Route path='Coin-Toss' element={<CoinTossPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
