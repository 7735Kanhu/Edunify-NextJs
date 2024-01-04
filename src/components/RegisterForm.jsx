'use client'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import {useFormStatus, useFormState} from "react-dom"
import mysqlserveraction from '@/app/mysqlserveraction';

const initialState ={
  message:null,
}

const RegisterForm = () => {
    const {register,handleSubmit, formState} = useForm();
    
    const {pending} = useFormStatus()
    // const router = useRouter();
    const {errors} = formState;
    const [state, formAction] =useFormState(mysqlserveraction,initialState)


  return (
    <div>
      {state?.message?<p>{state.message}</p>: null}
        <form className="w-80 flex flex-col gap-2" action={formAction} method='post'>
              <div className="flex flex-col text-xl">
                <label htmlFor="name">School Name</label>
                <input
                  type="text"
                  id="name"
                  name='name'
                  placeholder="Enter your School name"
                    className="py-1 px-3 border rounded-md"
                    {...register("name",{ required:{
                        value: true,
                        message: "School name is required !"
                    }  })}
                />
                {errors.name && <p className='text-sm text-red-500'>{errors.name.message}</p>}
              </div>
                <div className="flex flex-col text-xl">
                  <label htmlFor="number">Contact Number</label>
                  <input
                    type="number"
                    id="number"
                    name='number'
                    placeholder="Enter contact number"
                    className="py-1 px-3 border rounded-md"
                    {...register("number",{required:{
                        value: true,
                        message: "Contact number is required !"
                    }})}
                  />
                  {errors.number && <p className='text-sm text-red-500'>{errors.number.message}</p>}
                </div>
                <div className="flex flex-col text-xl">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name='state'
                    placeholder="Enter your School name"
                    className="py-1 px-3 border rounded-md"
                    {...register("state",{required:{
                        value: true,
                        message: "State name is required !"
                    }})}
                  />
                  {errors.state && <p className='text-sm text-red-500'>{errors.state.message}</p>}
                </div>
                <div className="flex flex-col text-xl">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name='city'
                    placeholder="Enter your School name"
                    className="py-1 px-3 border rounded-md"
                    {...register("city",{required:{
                        value: true,
                        message: "City namer is required !"
                    }})}
                  />
                  {errors.city && <p className='text-sm text-red-500'>{errors.city.message}</p>}
                </div>
                <div className="flex flex-col text-xl">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  cols="30"
                  rows="5"
                  name='address'
                  placeholder="Enter your full address..."
                  className="py-1 px-3 border rounded-md"
                  {...register("address",{required:{
                    value: true,
                    message: "Full address is required !"
                }})}
                ></textarea>
                {errors.address && <p className='text-sm text-red-500'>{errors.address.message}</p>}
              </div>
              <div className="flex flex-col text-xl">
                <label htmlFor="image">School Image</label>
                <input type="text" id="image" name='image' {...register("image",{required:{
                        value: true,
                        message: "Upload a School Photo"
                    }})}/>
                    {errors.image && <p className='text-sm text-red-500'>{errors.image.message}</p>}
              </div>
              <button type="submit" value="insert" name='submit' className="bg-orange-600 w-max mt-10 py-2 px-5 text-xl font-semibold rounded-md">{pending ? "Registering..." : "Register"}</button>
            </form>
    </div>
  )
}

export default RegisterForm