import React from 'react';
import './App.css';

function Header() {
  return (
    <header>
      <h1>Movie Collecion Site</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/podcast">Podcast</a>
          </li>
          <li>
            <a href="/movies">Movie Database</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
