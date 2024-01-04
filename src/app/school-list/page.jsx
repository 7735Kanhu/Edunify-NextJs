'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import executeQuery from '../api/schools/route'

const FindSchool = async() => {
  const result =await executeQuery("select * from schools", [])
  // const data = JSON.stringify(result);
  return (
    <div>
      {result.map((data)=>{
       return <h1 key={data.id}>{data.name}</h1>
      })}
      
    </div>
  )
}

export default FindSchool