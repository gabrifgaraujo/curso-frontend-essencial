import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Teste de conexão opcional, mas útil
pool.connect((err, client, release) => {
  if (err) {
    return console.error('❌ ERRO DE CONEXÃO COM O BANCO:', err.stack);
  }
  if (client) {
    client.query('SELECT NOW()', (err) => {
      release();
      if (err) {
        return console.error('❌ Erro ao executar a query de teste', err.stack);
      }
      console.log('✅ Conexão com o banco de dados bem-sucedida!');
    });
  }
});

export const query = (text: string, params?: any[]) => pool.query(text, params);
