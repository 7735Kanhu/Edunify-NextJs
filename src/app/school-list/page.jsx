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
      <div className='w-full bg-[url("/assets/school2.jpg")] bg-no-repeat'>
        <div className='max-w-[1280px] p-8 mx-auto text-center'>
        <h1>Search Your Dream School Here</h1>
        </div>
      </div>
      {data.map((item)=>{
       return <h1 key={item.id}>{item.name}
       <span>{item.city}</span>
       </h1>
      })}
      
    </div>
  )
}

export default FindSchool