// import mysql from "mysql2/promise";
// const executeQuery = async (query, data)=>{
//   try{
//     const db = await mysql.createConnection({
//       host:'127.0.0.1',
//       port:'3306',
//       database:'schools',
//       user:'root',
//       password:''
//     })
//     const [result] =await db.execute(query,data);
//     await db.end()
//     console.log(result);
//     return result;
//   }catch(err){
//     console.log(err);
//     return err
//   }
// };
// export default executeQuery;
// import db from '../../../src/app/util/db' // Import the MySQL connection
// import { NextResponse, NextRequest } from "next/server";

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     handleGetRequest(req, res);
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }

// async function handleGetRequest(req, res) {
//   try {
//     const query = 'SELECT * FROM schools';

//     db.query(query, (err, result) => {
//       if (err) {
//         res.status(500).json({ message: 'Error fetching data' });
//       } else {
//         res.status(200).json({ data: result });
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error' });
//   }
// }
// export async function GET(req,res) {
//   try {
//     const query = 'SELECT * FROM schools'; // Replace with your query

//     db.query(query, (err, result) => {
//       if (err) {
//         NextResponse.json({ message: 'Error fetching data' });
//       } else {
//         // return NextResponse.json({ data: result },{status:200});
//         res.status(200).json({ data: result });
//       }
//     });
//   } catch (error) {
//     NextResponse.json({ message: 'Internal server error' });
//   }
// }
// export const GET = async (req, res) => {
//   try {
//     const query = 'SELECT * FROM schools';

//     db.query(query, (err, result) => {
//       handleDatabaseResponse(err, result, res);
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

// const handleDatabaseResponse = (err, result, res) => {
//   if (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error fetching data' });
//   } else {
//     res.status(200).json({ data: result });
//   }
// };
// import { user } from '../../util/db';

//  export function GET(){
//   const query = 'SELECT * FROM schools'; 
//   db.query(query, (err, result) => {
//     if (err) {
//       NextResponse.json({ message: 'Error fetching data' });
//     } else {
//       return NextResponse.json({data:result},{status:200})
//     }
//   });
//  }
