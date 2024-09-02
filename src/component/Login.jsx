import React from 'react'

const Login = () => {
  return (
    <div className=' flex justify-center'>
    <form action="" className='flex justify-center flex-col gap-5  mt-5  w-54'>
    <p className='text-cyan-200 items-center flex justify-center text-4xl'>Sign up </p>

       
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
             <span className='text-base label-text text-cyan-100 '>password</span>
          </label>
          <input


             className='w-full input input-bordered h-10 border-2 border-black rounded-md'
             type="password"
             placeholder='password' />
       </div>
      
       <p className='text-center my-2 text-cyan-100 '>Already have an account? <a href="/login" className='text-blue-700'>sign up </a></p>
     <div className='flex justify-center'>
       <button type='submit' className='   border-2 rounded-xl  p-2 border-slate-700 text-cyan-100 '>login </button>
     </div>
    </form>
 </div>
  )
}

export default Login