import './loadEnv';
import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth';
import progressRouter from './routes/progress';
import rankingRouter from './routes/ranking';
import aiRouter from './routes/ai';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/progress', progressRouter);
app.use('/api/ranking', rankingRouter);
app.use('/api/ai', aiRouter);

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}` );
});
