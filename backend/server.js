const express = require('express');
const app = express();
const cors = require('cors'); // Import cors

// Set CORS options based on the environment
const corsOptions = {
  origin: process.env.REACT_APP_FRONTEND_URL,  // default to localhost
  optionsSuccessStatus: 200
};

// Enable CORS using the dynamic origin
app.use(cors(corsOptions));


app.get('/', (req, res) => {
  res.send('Backend is working');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
