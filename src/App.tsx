import React from 'react';
import './App.module.css';
import {Header} from "./components/header/Header";
import {Nav} from "./components/nav/Nav";
import {Experience} from "./components/experience/Experience";
import {Services} from "./components/services/Services";
import {Portfolio} from "./components/portfolio/Portfolio";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/footer/Footer";
import {ParticlesContainer} from "./components/Particle/Particle";
import style from './App.module.css'

function App() {
  return (
    <div className={style.container}>
    <ParticlesContainer/>
     <Header/>
      <Nav/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
</div>
  );
}

export default App;
