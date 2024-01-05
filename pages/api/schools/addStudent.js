import mysql from 'mysql2';
import dbConfig from '../../../src/app/util/db';

export default async function handler(req, res) {
  const { name, email, number,state, city, address, image } = req.body; // Assuming you're sending 'name' and 'email' in the request body

const connection = mysql.createConnection(dbConfig);

try {
    await connection.promise().query('INSERT INTO schools (name, email, number, state, city, address, image) VALUES (?, ?,?,?,?,?,?)', [name, email, number, state, city, address, image]);
    res.status(200).json({ message: 'Student added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding student', error: error.message });
  } finally {
    connection.end();
  }
}
