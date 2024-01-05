// import mysql from 'mysql2';
// import dbConfig from '../../../src/app/util/db';
// // import { writeFile } from 'fs';

// export default async function handler(req, res) {
//   const { name, number,state, city, address, image } = req.body; // Assuming you're sending 'name' and 'email' in the request body
// //   const { name, number,state, city, address, image } = await req.body; // Assuming you're sending 'name' and 'email' in the request body

// //   //////
// // const file = image.get('image');
// // const byteData= await file.arrayBuffer();
// // const buffer = Buffer.from(byteData);
// // const path = `./public/${file.name}`

// const connection = mysql.createConnection(dbConfig);

// try {
//     //   const image =writeFile(path,buffer)
//     await connection.promise().query('INSERT INTO schools (name, number, state, city, address, image) VALUES (?, ?,?,?,?,?)', [name, number, state, city, address, image]);
//     res.status(200).json({ message: 'Student added successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error adding student', error: error.message });
//   } finally {
//     connection.end();
//   }
// }
import bodyParser from 'body-parser';
import multer from 'multer';
import mysql from 'mysql2';
import dbConfig from '../../../src/app/util/db';

const upload = multer({ dest: 'public/' }); // Set your desired upload directory
// const urlencodedParser = bodyParser.urlencoded({ extended: false });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  let connection;
  try {
    await new Promise((resolve, reject) => {
      upload.single('image')(req, res, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });

    const { name, number, state, city, address } = req.body;
    const connection = mysql.createConnection(dbConfig);

    const image = req.file; // Multer stores the uploaded file information in req.file

    await connection.promise().query('INSERT INTO schools (name, number, state, city, address, image) VALUES (?, ?, ?, ?, ?, ?)',
      [name, number, state, city, address, image.filename]); // Assuming 'image' is the filename stored in the database

    res.status(200).json({ message: 'Student added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding student', error: error.message });
  } finally {
    if (connection) {
      connection.end(); // Close the connection in the finally block
    }
  }
}