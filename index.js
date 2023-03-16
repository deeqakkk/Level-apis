const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');
const app = express();
const path = require('path');
const levelRoutes = require('./routes/levelRoutes');
// Connect to the database
connectDB();

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/levels', levelRoutes);
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});