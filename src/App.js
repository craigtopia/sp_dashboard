import React, { useEffect, useState } from 'react';

const backendUrl = process.env.REACT_APP_BACKEND_URL;


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    fetch(`${backendUrl}`)
      .then((response) => response.text()) // assuming your backend sends text
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty array ensures this runs once when component mounts

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spartan Dashboard</h1>
        <p>Backend says: {data ? data : "Loading..."}</p>
      </header>
    </div>
  );
}

export default App;
