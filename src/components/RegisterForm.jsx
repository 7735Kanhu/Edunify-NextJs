'use client'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [image, setImage] = useState('');
    const {register, formState} = useForm();
    // console.log(name,number);
    
    // const {pending} = useFormStatus()
    const {errors} = formState;
    // const [state, formAction] =useFormState(mysqlserveraction,initialState)
 
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(image);
      // const formData = new FormData();
      // formData.set("name",name)
      // formData.set("number",number)
      // formData.set("state",state)
      // formData.set("city",city)
      // formData.set("address",address)
      // formData.set("image",image)
  
      try {
        const response = await fetch('http://localhost:3000/api/schools/addStudent', {
          method: 'POST',
          // headers: {
          //   'Content-Type': 'application/json',
          // },
          body: JSON.stringify({ name, number, state, city, address, image }),
          // body: formData,
        });
  
        if (response.ok) {
          // Show success message or redirect
          console.log('Student added successfully');
        } else {
          // Handle error case
          console.error('Failed to add student');
        }
      } catch (error) {
        console.error('Error adding student:', error);
      }
    };

  return (
    <div>
      {/* {state?.message?<p>{state.message}</p>: null} */}
        <form className="sm:w-80 flex flex-col gap-2 items-center md:items-start text-center justify-center align-middle w-full md:justify-start md:text-start text-md" onSubmit={handleSubmit} >
              <div className="flex flex-col">
                <label htmlFor="name" >School Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your School name"
                    className="py-1 px-3 border rounded-md"
                    // {...register("name",{ required:{
                    //     value: true,
                    //     message: "School name is required !"
                    // }  })}
                />
                {errors.name && <p className='text-sm text-red-500'>{errors.name.message}</p>}
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
                    // {...register("number",{required:{
                    //     value: true,
                    //     message: "Contact number is required !"
                    // }})}
                  />
                  {errors.number && <p className='text-sm text-red-500'>{errors.number.message}</p>}
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
                    // {...register("state",{required:{
                    //     value: true,
                    //     message: "State name is required !"
                    // }})}
                  />
                  {errors.state && <p className='text-sm text-red-500'>{errors.state.message}</p>}
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
                    // {...register("city",{required:{
                    //     value: true,
                    //     message: "City namer is required !"
                    // }})}
                  />
                  {errors.city && <p className='text-sm text-red-500'>{errors.city.message}</p>}
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
                //   {...register("address",{required:{
                //     value: true,
                //     message: "Full address is required !"
                // }})}
                ></textarea>
                {errors.address && <p className='text-sm text-red-500'>{errors.address.message}</p>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="image">School Image</label>
                <input type="file" id="image" className='border w-60'
                // value={image}
                  onChange={(e)=> setImage(e.target.files?.[0])} 
                  // (e)=> setImage(e.target.files[0])
                  // {...register("image",{required:{
                  //       value: true,
                  //       message: "Upload a School Photo"
                    // }})}
                    />
                    {errors.image && <p className='text-sm text-red-500'>{errors.image.message}</p>}
              </div>
              <button type="submit" className="bg-orange-600 w-max mt-10 py-2 mb-3 px-5 text-xl font-semibold rounded-md">Register</button>
            </form>
    </div>
  )
}

export default RegisterForm