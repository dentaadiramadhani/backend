import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index';

dotenv.config();

const app = express();

app.use(cors({
  origin: (origin, callback) => {
    const allowed = [
      "http://localhost:5173",
      "https://frontend-sigma-blush-70.vercel.app",
      "https://frontend-537tdj10p-dante-grup-s-projects.vercel.app"
    ];
    if (!origin || allowed.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', message: 'Event Management API is running' });
});

app.use('/api', routes);

export default app;
