const mysql = require('mysql2/promise');

const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
const MYSQL_USER = process.env.MYSQL_USER || 'root';
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD ?? '';

const DB_NAME = process.env.MYSQL_DATABASE || 'geoprodutos_db';

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    imagem VARCHAR(255)
  )
`;

const seedValues = [
  ['Camiseta Geoparque', 59.90, '👕'],
  ['Miniatura T-Rex (Impressão 3D)', 35.00, '🦖'],
  ['Caneca Fósseis', 42.50, '☕'],
  ['Artesanato Local Uberaba', 85.00, '🏺']
];

const dbPromise = (async () => {
  const connection = await mysql.createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\``);
  await connection.query(`USE \`${DB_NAME}\``);
  await connection.query(createTableQuery);

  const [[{ count }]] = await connection.query('SELECT COUNT(*) AS count FROM produtos');
  if (count === 0) {
    await connection.query('INSERT INTO produtos (nome, preco, imagem) VALUES ?', [seedValues]);
  }

  return connection;
})();

module.exports = { dbPromise };