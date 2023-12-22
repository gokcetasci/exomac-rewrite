import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import HomeBlogContent from './components/HomeBlogContent';
import Subscribes from './components/Subscribes';
import { IoIosArrowUp } from "react-icons/io";

function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Router>
      <div>
        <Header />
        <Home />
        <Portfolio />
        <HomeBlogContent />
        <Subscribes />
        <Footer />
        <div className={`fixed bottom-24 right-7 z-40`}>
          <button className="bg-primary bg-opacity-50 text-white rounded-full flex justify-center items-center w-12 h-12 hover:scale-110 transition duration-300 ease-in-out"
            style={{ position: 'fixed', bottom: '2rem', right: '1rem' }}
            onClick={scrollToTop}
          >
            <IoIosArrowUp />
          </button>
        </div>
      </div>
    </Router>
  );
}


export default App;
