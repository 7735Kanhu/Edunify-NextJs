'use server'
// // import fs from 'fs';
// // import path from 'path';
// // import formidable from 'formidable';
// import { revalidatePath } from "next/cache"
// import executeQuery from "./api/schools/route"

// const mysqlserveraction = async (prevState, formData) => {

//     const name = formData.get("name")
//     const number = formData.get("number")
//     const state = formData.get("state")
//     const city = formData.get("city")
//     const address = formData.get("address")
//     const image = formData.get("image")
//     const bname = formData.get("submit")

//     if(bname === "insert"){
//         if(name != '' && number !='' && address != ''){
//             // const result = executeQuery("insert into schools values(?,?,?,?,?,?)",[name,number,state,city,address,image]);
//             const result = executeQuery("INSERT INTO schools (name, number, state, city, address, image) VALUES (?, ?, ?, ?, ?, ?)", [name, number, state, city, address, image]);
//             if(result.affectedRows){
//                 revalidatePath("/school-list")
//                 console.log(result);
//             return { message: "Your School Registered."}
//             }else{
//                 revalidatePath("/create-school")
//             return { message: "Some Error occured."}
//             }
//         }else{
//             revalidatePath("/create-school")
//             return { message: "Some field are empty."}
//         }
//     }
//   return (
//     <div>mysqlserveraction</div>
//   )
// };

// export default mysqlserveraction


// import fs from 'fs';
// import path from 'path';
// import formidable from 'formidable';
// import { revalidatePath } from 'next/cache';
// import executeQuery from './api/schools/route';

// const mysqlserveraction = async (prevState, formData) => {
//   const name = formData.get('name');
//   const number = formData.get('number');
//   const state = formData.get('state');
//   const city = formData.get('city');
//   const address = formData.get('address');
//   const image = formData.get('image');
//   const bname = formData.get('submit');

//   if (bname === 'insert') {
//     if (name !== '' && number !== '' && address !== '') {
//       const form = new formidable.IncomingForm();

//       const resultPromise = new Promise((resolve, reject) => {
//         form.parse(formData, async (err, fields, files) => {
//           if (err) {
//             reject('Error parsing form data');
//             return;
//           }

//           try {
//             const imageFile = files.image;
//             const uploadPath = path.join(process.cwd(), 'public', 'uploads', imageFile.name);

//             await fs.promises.mkdir(path.dirname(uploadPath), { recursive: true });
//             await fs.promises.rename(imageFile.path, uploadPath);

//             const result = await executeQuery(
//               'INSERT INTO schools (name, number, state, city, address, image) VALUES (?, ?, ?, ?, ?, ?)',
//               [name, number, state, city, address, `/uploads/${imageFile.name}`]
//             );

//             if (result.affectedRows) {
//               revalidatePath('/school-list');
//               resolve({ message: 'Your School Registered.' });
//             } else {
//               revalidatePath('/create-school');
//               reject({ message: 'Some Error occurred.' });
//             }
//           } catch (error) {
//             reject({ message: 'Error uploading image or executing query.' });
//           }
//         });
//       });

//       try {
//         const result = await resultPromise;
//         console.log(result);
//         return result;
//       } catch (error) {
//         console.error(error);
//         return { message: 'Error handling form data or executing query.' };
//       }
//     } else {
//       revalidatePath('/create-school');
//       return { message: 'Some fields are empty.' };
//     }
//   }

//   return { message: 'Default message if conditions are not met.' };
// };

// export default mysqlserveraction;

