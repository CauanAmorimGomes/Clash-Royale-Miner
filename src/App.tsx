import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MinerStats from './components/MinerStats';
import NerfHistory from './components/NerfHistory';
import Strategy from './components/Strategy';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <MinerStats />
      <NerfHistory />
      <Strategy />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
