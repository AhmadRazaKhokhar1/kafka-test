// Express
import express from 'express';

// CORS
import cors from 'cors';

// DotEnv
import {configDotenv} from 'dotenv';
configDotenv({path:'.env.development'});

// Routes
import Routes from './routes/index.js';

// PORT
const PORT = process.env.PORT;

// Intialize App 
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({origin:'*'})) // CORS with wildcard
app.use('/api', Routes)

// Listen
app.listen(PORT, ()=>console.log({message:`The application is live at PORT:${PORT}`}));