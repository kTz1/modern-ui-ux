import React from 'react';
// Containers
import { Footer, Blog, Header, Features, Possibility, WhatGPT3 } from './containers';
// Components
import { Brand, CTA, Navbar } from './components';
// Styles
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App;
