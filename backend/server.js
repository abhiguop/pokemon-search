const express = require('express');
const cors = require('cors');
const pokemonRoutes = require('./routes/pokemonRoutes');
const { errorHandler } = require('./utils/errorHandler');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', pokemonRoutes);

// Error Handling
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
