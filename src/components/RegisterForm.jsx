'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { analytics } from '@/firebase/firebase-config';
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage'

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
  const [fileupload, setFileupload] = useState(null);
    const {register, formState} = useForm();
    
    const {errors} = formState;
 
    const handleSubmit = async (e) => {
      e.preventDefault();
      if(fileupload!==null){
          const fileref =ref(analytics,'school/photo')
          uploadBytes(fileref,fileupload[0]).then((data)=>{
            getDownloadURL(data.ref).then((url)=>{
              console.log("url",url);
              setImage(url)
            })
          })
      }else{
        console.log('upload image')
      }
   
   try {
        const response = await fetch('http://localhost:3000/api/schools/addStudent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, number, state, city, address, image }),
        });
  
        if (response.ok) {
          console.log('Student added successfully');
          setName('')
          setEmail('')
          setNumber('')
          setState('')
          setCity('')
          setAddress('')
          setFileupload('')
        } else {
          // Handle error case
          console.error('Failed to add student');
        }
      }catch (error) {
        console.error('Error adding student:', error);
      }
    };
    
   
  
      
  return (
    <div>
        <form className="sm:w-80 flex flex-col gap-2 items-center md:items-start text-center justify-center align-middle w-full md:justify-start md:text-start text-md" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="image">School Image</label>
                <input type="file" id="image" className='border w-60'
                  onChange={(e)=> setFileupload(e.target.files)} 
                    />
              </div>
              <div className="flex flex-col">
                <label  >School Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your School name"
                    className="py-1 px-3 border rounded-md"
                required
                />
              </div>
              <div className="flex flex-col">
                <label  >Email Id</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email Id"
                    className="py-1 px-3 border rounded-md"
                required
                />
              </div>
                <div className="flex flex-col">
                  <label htmlFor="number">Contact Number</label>
                  <input
                    type="number"
                    id="number"
                    value={number}
                    onChange={(e) => {setNumber(e.target.value)}}
                    placeholder="Enter contact number"
                    className="py-1 px-3 border rounded-md"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    value={state}
                  onChange={(e) => setState(e.target.value)}
                    placeholder="Enter your School name"
                    className="py-1 px-3 border rounded-md"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter your School name"
                    className="py-1 px-3 border rounded-md"
                    required
                  />
                </div>
                <div className="flex flex-col">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  cols="25"
                  rows="5"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your full address..."
                  className="py-1 px-3 border rounded-md"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-orange-600 w-max mt-10 py-2 mb-3 px-5 text-xl font-semibold rounded-md">Register</button>
            </form>
    </div>
  )
}

export default RegisterForm