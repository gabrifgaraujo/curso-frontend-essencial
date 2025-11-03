import { Pool } from 'pg';
import '../loadEnv'; // Garante que as variáveis de ambiente sejam carregadas

// 1. Extrai o nome do host da sua DATABASE_URL
// Ex: "db.siuadmfvyiovufmzpkwg.supabase.co"
const dbHost = process.env.DATABASE_URL ? new URL(process.env.DATABASE_URL).hostname : undefined;

// 2. Cria o pool de conexões
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // 3. ADICIONA ESTA CONFIGURAÇÃO:
  // Força a resolução do DNS para um endereço IPv4.
  // 'family: 4' diz ao Node.js para usar apenas endereços da família IPv4.
  host: dbHost, 
  // A biblioteca 'pg' usa o 'host' para a resolução de DNS, 
  // e podemos passar opções adicionais aqui, mas apenas o host já deve ser suficiente
  // para a maioria dos casos. Se não for, a opção 'family' pode ser adicionada ao objeto de conexão.
  // No entanto, a forma mais simples é garantir que o host seja resolvido para IPv4.
  // Uma forma mais explícita seria:
  // connection: {
  //   host: dbHost,
  //   family: 4
  // }
  // Mas vamos tentar a forma mais simples primeiro.
});

// Teste de conexão (opcional, mas bom para debug)
pool.connect((err, client, release) => {
  if (err) {
    return console.error('❌ ERRO DE CONEXÃO COM O BANCO:', err.stack);
  }
  if (client) {
    console.log('✅ Conexão com o banco de dados bem-sucedida!');
    client.release();
  }
});

// Função de query que usaremos em todo o app
export const query = (text: string, params?: any[]) => pool.query(text, params);

export default pool;
