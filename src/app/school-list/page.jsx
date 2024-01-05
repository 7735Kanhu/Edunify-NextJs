'use client'
// import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import executeQuery from '../api/schools/route'

const FindSchool = () => {
  const [data, setData] = useState([]);
  // const result =await executeQuery("select * from schools", [])
  // const data = JSON.stringify(result);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/schools/getStudent'); // Fetch data from the API route
        if (response.ok) {
          const result = await response.json();
          setData(result.data); // Set the fetched data to the state
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className='w-full'>
      <div className='w-full bg-[url("/assets/school2.jpg")] bg-no-repeat bg-cover'>
        <div className=' p-8 py-28 mx-auto text-center h-[70vh]'>
        <h1 className='text-4xl font-bold text-white'>Search Your <span className='text-orange-600'>Dream</span> School Here</h1>
        <input type="text" placeholder='search school...' className='py-3 px-4 text-lg mt-5 rounded-full shadow-xl outline-none bg-orange-400'/>
        </div>
      </div>
      <div className='max-w-[1280px] mx-auto flex flex-wrap gap-4 w-full my-14 justify-center'>
        {
          data.map((item)=>{
            return <div key={item.id} className='p-2 shadow-xl rounded-xl hover:scale-95 transition-all items-center'>
              <a href="#" className='flex flex-col gap-4'>
                <img src={item.image} alt="school" className='h-64 w-[280px]'/>
                <div className='flex flex-col gap-3'>
                  <p className='text-blue-600'>{item.city}</p>
                  <h2 className='text-2xl font-bold text-wrap w-[280px]'>{item.name}</h2>
                  <p className='text-xl font-bold text-orange-600 pb-3'>{item.city}</p>
                </div>
              </a>
            </div>
          })
        }
      </div>
      {/* {data.map((item)=>{
       return <h1 key={item.id}>{item.name}
       <span>{item.city}</span>
       </h1>
      })} */}
      
    </div>
  )
}

export default FindSchool