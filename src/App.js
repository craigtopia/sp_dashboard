// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// src/App.js
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:3001/')
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
