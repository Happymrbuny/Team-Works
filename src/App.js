import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import DirectoryPage from './pages/DirectoryPage';
import TeamGeneratorPage from './pages/TeamGeneratorPage';
import BracketGeneratorPage from './pages/BracketGeneratorPage';
import CoinTossPage from './pages/CoinTossPage';
import DartsPage from './pages/DartsPage';
import UnoPage from './pages/UnoPage';
import CardsPage from './pages/CardsPage';

function App() {
  const MEMBERS = [];

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<DirectoryPage />} />
          <Route path='Team-Generator' element={<TeamGeneratorPage members={MEMBERS}/>} />
          <Route path='Bracket-Generator' element={<BracketGeneratorPage />} />
          <Route path='Coin-Toss' element={<CoinTossPage />} />
          <Route path='Darts' element={<DartsPage />} />
          <Route path='UNO' element={<UnoPage />} />
          <Route path='Cards' element={<CardsPage />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
