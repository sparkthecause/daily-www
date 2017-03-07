import React from 'react';

const Home = () => {
  return (
    <div>
      <a href="/archive" className="banner">
        Curious? See today's email
        <i className="icon-right-big"></i>
      </a>

      <div className="hero">
        <h1>Get smiles in <br className="mobile-only"/>your inbox</h1>
        <form>
          <input id="emailInput" type="email" placeholder="Your email address"/>
          <button id="subscribeBtn"><i className="icon-right-big"></i></button>
        </form>
        <h1>every day.</h1>
      </div>

      <div className="hero-bg"></div>
    </div>
  )
};

export default Home;
