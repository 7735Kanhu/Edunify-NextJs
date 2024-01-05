import mysql from 'mysql2';
import dbConfig from '../../../src/app/util/db';
// import { writeFile } from 'fs';

export default async function handler(req, res) {
  const { name, number,state, city, address, image } = req.body; // Assuming you're sending 'name' and 'email' in the request body
//   const { name, number,state, city, address, image } = await req.body; // Assuming you're sending 'name' and 'email' in the request body

//   //////
// const file = image.get('image');
// const byteData= await file.arrayBuffer();
// const buffer = Buffer.from(byteData);
// const path = `./public/${file.name}`

const connection = mysql.createConnection(dbConfig);

try {
    //   const image =writeFile(path,buffer)
    await connection.promise().query('INSERT INTO schools (name, number, state, city, address, image) VALUES (?, ?,?,?,?,?)', [name, number, state, city, address, image]);
    res.status(200).json({ message: 'Student added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding student', error: error.message });
  } finally {
    connection.end();
  }
}