import React from 'react';
import Banner from './Banner';
import Subscribe from './Subscribe'

const Home = () => {
  return (
    <div>
      <Banner/>
      <div className="hero">
        <h1>Get smiles in <br className="mobile-only"/>your inbox</h1>
        <Subscribe/>
        <h1>every day.</h1>
      </div>
    </div>
  )
};

export default Home;
