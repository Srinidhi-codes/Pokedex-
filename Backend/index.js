import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import DBConnection from './config/db.js';
import pokemonRoutes from './routes/pokemonRoutes.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

DBConnection()

// Routes
app.use('/api/pokemon', pokemonRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
