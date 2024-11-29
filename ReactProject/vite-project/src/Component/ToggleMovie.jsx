import React, { useState } from 'react';

const ToggleMovie = () => {
  const [showDetails, setShowDetails] = useState(false);

  const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    genre: "Science Fiction",
    plot: "A thief who steals corporate secrets through dream-sharing technology is tasked with planting an idea in someone's mind."
  };

  // Toggle the showDetails state
  const toggleDetails = () => {
    setShowDetails(prevState => !prevState);
  };

  return (
    <>
    {/* <div style={styles.container}> */}
      <h2>{movie.title}</h2>
      <button onClick={toggleDetails}>movie</button>
        {/* {showDetails ? "Hide Details" : "Show Details"} */}
      
      
      {/* Conditionally render details */}
      {showDetails && (
        <div className="container">
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Release Year:</strong> {movie.releaseYear}</p>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Plot:</strong> {movie.plot}</p>
        </div>
      )}
    </>
  );
};

// Optional styling
// const styles = {
//   container: {
//     padding: '20px',
//     maxWidth: '400px',
//     margin: '20px auto',
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   button: {
//     margin: '10px 0',
//     padding: '10px 20px',
//     backgroundColor: '#007BFF',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
//   details: {
//     marginTop: '15px',
//     color: '#333',
//   }
//};

export default ToggleMovie;
