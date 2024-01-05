import mysql from 'mysql2';
import dbConfig from '../../../src/app/util/db';

export default async function handler(req, res) {
  const connection = mysql.createConnection(dbConfig);

  try {
    const [rows] = await connection.promise().query('SELECT * FROM schools');
    res.status(200).json({ data: rows });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error: error.message });
  } finally {
    connection.end();
  }
}