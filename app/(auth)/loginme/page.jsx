'use client'
import React, { useState } from 'react'

const Login = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleData = async (name,email) => {
    try {
      let response = await fetch('http://localhost:3000/api/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      });
  
      // Wait for the response to be parsed before checking response.ok
      const data = await response.json();
      console.log(data);
  
      if (response.ok) {
        alert(data.res);  // Use 'data' instead of 'response' for the alert
      } else {
        alert(data.res);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending data.');
    }
  };
  

  return (
    <div className='h-screen flex justify-center items-center'>
      <div>
        <input type="text" placeholder='' value={name} onChange={(e) => setName(e.target.value)} className=' w-[200px] h-[40px] text-black bg-white border-2 border-yellow-200 my-2 rounded-md' /><br />
        <input type="email" placeholder='' value={email} onChange={(e) => setEmail(e.target.value)} className=' w-[200px] h-[40px] text-black bg-white border-2 border-yellow-200 my-2 rounded-md' /> <br />
        <button onClick={()=>handleData(name,email)} className='w-[200px] h-[40px] rounded-md bg-red-600 text-white '>
          Post Data
        </button>
      </div>
    </div>
  )
}

export default Login