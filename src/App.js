import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Home/>
        <Portfolio/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
