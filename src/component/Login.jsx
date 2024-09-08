import React, { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
const Login = () => {
   
      const[data,setdata]=useState({
        
        username:"",
        
        password:""
        
  

      })
       const navigator=useNavigate()
      const onsubmithandel=async(e)=>{
           e.preventDefault();
           
              try {
                 const response = await axios.post('http://localhost:8080/api/login', data, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        if (response.request.statusText) {
         navigator("/home");
        }
        console.log(response)
              } catch (error) {
                 console.log(error)
              }
            }   
  return (
    <div className=' flex justify-center'>
    <form   onSubmit={onsubmithandel} action="" className='flex justify-center flex-col gap-5  mt-5  w-54'>
    <p className='text-cyan-200 items-center flex justify-center text-4xl'>Login </p>

       
       <div>
          <label className='label p-2'>
             <span className='text-base label-text text-cyan-100 '>user name</span>
          </label>
          <input
            value={data.username}
            onChange={(e)=>setdata({...data,username:e.target.value})}

             className='w-full input input-bordered h-10 border-2 border-black rounded-md'
             type="text"
             placeholder='user name' />
       </div>
       
       <div>
          <label className='label p-2'>
             <span className='text-base label-text text-cyan-100 '>password</span>
          </label>
          <input
value={data.password}
onChange={(e)=>setdata({...data,password:e.target.value})}

             className='w-full input input-bordered h-10 border-2 border-black rounded-md'
             type="password"
             placeholder='password' />
       </div>
      
       <p className='text-center my-2 text-cyan-100 '>Already have an account? <a href="/" className='text-blue-700'>sign up </a></p>
     <div className='flex justify-center'>
       <button type='submit' className='   border-2 rounded-xl  p-2 border-slate-700 text-cyan-100 '>login </button>
     </div>
    </form>
 </div>
  )
}

export default Login