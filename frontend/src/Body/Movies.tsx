import React, { useState } from 'react';
import data from '../MovieData.json';
import './MyStyle.css';


const MVS = data.MovieData.map((movie) => {
  if (!movie.hasOwnProperty("Edited")) {
    return { ...movie, Edited: "No" };
  } else {
    return movie;
  }
});

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(MVS);

  return (
    <>

      <div>
        <br></br>
        <table>
          <caption>Here's the Movie Collection</caption>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((m, index) => (
              <tr key={index}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}



export default MovieList;
