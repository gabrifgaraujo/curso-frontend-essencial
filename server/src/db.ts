import { Pool } from 'pg';
import '../loadEnv';

const dbUrl = process.env.DATABASE_URL;
if (!dbUrl) {
  throw new Error("DATABASE_URL não está definida nas variáveis de ambiente.");
}

const dbConfig = new URL(dbUrl);

const pool = new Pool({
  user: dbConfig.username,
  password: dbConfig.password,
  host: dbConfig.hostname,
  port: Number(dbConfig.port),
  database: dbConfig.pathname.split('/')[1],
  ssl: {
    rejectUnauthorized: false // Necessário para a maioria das conexões com Supabase/Railway
  },
  // A OPÇÃO MÁGICA:
  // Diz ao Node.js para usar apenas endereços da família IPv4 ao resolver o 'host'.
  family: 4, 
} as any);

pool.connect((err, client, release) => {
  if (err) {
    return console.error('❌ ERRO DE CONEXÃO COM O BANCO:', err);
  }
  if (client) {
    console.log('✅ Conexão com o banco de dados bem-sucedida!');
    client.release();
  }
});

export const query = (text: string, params?: any[]) => pool.query(text, params);

export default pool;
