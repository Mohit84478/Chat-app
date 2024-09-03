import React from 'react'
import { Link } from 'react-router-dom'

const Sign = () => {
   return (
      <div className=' flex justify-center'>
         <form action="" className='flex justify-center flex-col gap-5  mt-5  w-54'>
         <p className='text-cyan-200 items-center flex justify-center text-4xl'>Sign up </p>

            <div>
               <label className='label p-2'>
                  <span className='text-base label-text text-cyan-100 '>Full Name</span>
               </label>
               <input


                  className='w-full h-10 border-2 border-black rounded-md'
                  type="text"
                  placeholder='Full Name' />
            </div>
            <div>
               <label className='label p-2'>
                  <span className='text-base label-text text-cyan-100 '>user name</span>
               </label>
               <input


                  className='w-full input input-bordered h-10 border-2 border-black rounded-md'
                  type="text"
                  placeholder='user name' />
            </div>
            <div>
               <label className='label p-2'>
                  <span className='text-base label-text text-cyan-100 '>gmail</span>
               </label>
               <input


                  className='w-full input input-bordered h-10 border-2 border-black rounded-md'
                  type="email"
                  placeholder='gmail' />
            </div>
            <div>
               <label className='label p-2'>
                  <span className='text-base label-text text-cyan-100 '>password</span>
               </label>
               <input


                  className='w-full input input-bordered h-10 border-2 border-black rounded-md'
                  type="password"
                  placeholder='password' />
            </div>
            <div>
               <label className='label p-2'>
                  <span className='text-base label-text text-cyan-100 '>conform password</span>
               </label>
               <input


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