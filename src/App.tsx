import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './layouts/HomePage/ExploreTopBooks';
import { Carousel } from './layouts/Carousel/Carousel';

function App() {
  return (
    <>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
    </>

  );
}

export default App;
