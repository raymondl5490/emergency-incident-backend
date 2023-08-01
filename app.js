import express from 'express';
import cors from 'cors';
import incidentRoutes from './routes/incidentRoutes';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', incidentRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
