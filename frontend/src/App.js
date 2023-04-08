import React from 'react';

import './App.css';
import MovieList from './Body/Movies.tsx';
import Header from './Header.tsx';
import Home from './Body/Home.tsx';
import Podcast from './Body/Podcast.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <body>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/podcast" element={<Podcast></Podcast>} />
            <Route path="/movies" element={<MovieList></MovieList>} />
          </Routes>
        </body>
      </BrowserRouter>
    </div>
  );
}

export default App;
