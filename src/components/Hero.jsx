import { useState, useEffect } from "react";

import { BiSearchAlt } from "react-icons/bi";

function Hero({ setQuery }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(document.getElementById("input_search").value);
  };

  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__text">
            <h1>FREE SOURCES OF IMAGES</h1>
            <p>Browse and download images for free.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                id="input_search"
                placeholder="Search Photos..."
              />
              <BiSearchAlt className="search__icon" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;
