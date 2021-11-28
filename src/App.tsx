import React from 'react';
import './styles/index.css';
import Header from './components/Header/Header';
import Discount from './components/Discount/DIscount';
import { BrowserRouter as Router } from 'react-router-dom';
import ButtonE from './components/ButtonE/ButtonE';
import Know from './components/Know/Know';
import Benefits from './components/Benefits/Benefits';
import News from "./components/News/News";
import Historias from './components/Historias/Historias';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
        <Router>
            <ButtonE />
            <Discount />
            <Header />
            <Know />
            <Benefits />
            <News />
            <Historias />
            <Footer />
        </Router>
    </>
  );
}

export default App;
