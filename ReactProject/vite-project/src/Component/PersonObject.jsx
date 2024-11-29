import React, { useState } from 'react';

const PersonObject = () => {
  const [showInfo, setShowInfo] = useState(false);

  // Define the person object
  const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
    location: "New York, USA",
    bio: "Passionate about coding, enjoys hiking and playing chess."
  };

  // Toggle function to show or hide the person info
  const toggleInfo = () => {
    setShowInfo(prevShowInfo => !prevShowInfo);
  };

  return (
    <div style={styles.container}>
      <button onClick={toggleInfo} style={styles.button}>
        {showInfo ? "Hide Info" : "Show Info"}
      </button>
      
      {/* Conditionally render person info in a card format */}
      {showInfo && (
        <div style={styles.card}>
          <h3>{person.name}</h3>
          <p><strong>Age:</strong> {person.age}</p>
          <p><strong>Occupation:</strong> {person.occupation}</p>
          <p><strong>Location:</strong> {person.location}</p>
          <p><strong>Bio:</strong> {person.bio}</p>
        </div>
      )}
    </div>
  );
};

// Optional styling for the component
const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: '20px auto',
    textAlign: 'center',
  },
  button: {
    margin: '10px 0',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  card: {
    marginTop: '15px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
  }
};

export default PersonObject;
