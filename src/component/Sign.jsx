import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sign = () => {
    const[data,setdata]=useState({
      fullname:"",
      username:"",
      gmail:"",
      password:"",
      conformpassword:""

    })
    const onsubmithandel=async(e)=>{
         e.preventDefault();
         
            try {
               const response = await axios.post('http://localhost:8080/api/register', data, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      });
      console.log(response)
            } catch (error) {
               console.log(error)
            }
         
    }
   return (
      <div className=' flex justify-center'>
         <form onSubmit={onsubmithandel} action="" className='flex justify-center flex-col gap-5  mt-5  w-54'>
         <p className='text-cyan-200 items-center flex justify-center text-4xl'>Sign up </p>

            <div>
               <label className='label p-2'>
                  <span className='text-base label-text text-cyan-100 '>Full Name</span>
               </label>
               <input
                value={data.fullname}
            onChange={(e)=>(setdata({...data,fullname:e.target.value}))}
                  className='w-full h-10 border-2 border-black rounded-md'
                  type="text"
                  placeholder='Full Name' />
            </div>
            <div>
               <label className='label p-2'>
                  <span className='text-base label-text text-cyan-100 '>user name</span>
               </label>
               <input
              value={data.username}
              onChange={(e)=>(setdata({...data,username:e.target.value}))}

                  className='w-full input input-bordered h-10 border-2 border-black rounded-md'
                  type="text"
                  placeholder='user name' />
            </div>
            <div>
               <label className='label p-2'>
                  <span className='text-base label-text text-cyan-100 '>gmail</span>
               </label>
               <input
                 value={data.gmail}
                 onChange={(e)=>(setdata({...data,gmail:e.target.value}))}

                  className='w-full input input-bordered h-10 border-2 border-black rounded-md'
                  type="email"
                  placeholder='gmail' />
            </div>
            <div>
               <label className='label p-2'>
                  <span className='text-base label-text text-cyan-100 '>password</span>
               </label>
               <input
                value={data.password}
                onChange={(e)=>(setdata({...data,password:e.target.value}))}

                  className='w-full input input-bordered h-10 border-2 border-black rounded-md'
                  type="password"
                  placeholder='password' />
            </div>
            <div>
               <label className='label p-2'>
                  <span className='text-base label-text text-cyan-100 '>conform password</span>
               </label>
               <input

                value={data.conformpassword}
            onChange={(e)=>(setdata({...data,conformpassword:e.target.value}))}
                  className='w-full input input-bordered h-10 border-2 border-black rounded-md '
                  type="password"
                  placeholder='again password' />
            </div>
            <p className='text-center my-2 text-cyan-100 '>Already have an account? <Link to={"/login"} className='text-blue-700'>login  </Link></p>
          <div className='flex justify-center'>
            <button type='submit' className='   border-2 rounded-xl  p-2 border-slate-700 text-cyan-100 '>Sign up</button>
          </div>
         </form>
      </div>
   )
}

export default Sign