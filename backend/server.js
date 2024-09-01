const express = require('express');
const app = express();
const cors = require('cors'); // Import cors

// Use the cors middleware
app.use(cors({
    origin: 'http://localhost:3000' // Only allow requests from this origin
  }));

app.get('/', (req, res) => {
  res.send('Backend is working');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
