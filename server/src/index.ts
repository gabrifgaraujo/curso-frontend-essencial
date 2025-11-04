import './loadEnv';
import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth';
import progressRouter from './routes/progress';
import rankingRouter from './routes/ranking';
import aiRouter from './routes/ai';

const app = express();

// 1. Define a lista de domínios permitidos (sua "whitelist")
const allowedOrigins = [
  'http://localhost:5173', // Permite o desenvolvimento local
  'https://gabrifgaraujo.github.io' // Permite seu site em produção
]

// 2. Configura o middleware CORS
const corsOptions: cors.CorsOptions = {
  origin: (origin, callback ) => {
    // Permite requisições sem 'origin' (como apps mobile ou Postman)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'A política de CORS para este site não permite acesso da origem especificada.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
};

// 3. Aplica o middleware CORS configurado ao Express
app.use(cors(corsOptions));

const port = process.env.PORT || 4000;
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/progress', progressRouter);
app.use('/api/ranking', rankingRouter);
app.use('/api/ai', aiRouter);

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}` );
});
