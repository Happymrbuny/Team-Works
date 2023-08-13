import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import TeamToolsList from './features/teamtools/TeamToolsList';

function App() {
  return (
    <div className="App">
      <Header />
      <TeamToolsList />
      <Footer />
    </div>
  );
}

export default App;
