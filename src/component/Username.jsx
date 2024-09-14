import React from 'react'
import { useSelector } from 'react-redux';

export const Username = () => {
    const { selectuser } = useSelector(item => item.user); // Access state

    if (!selectuser) {
        return <div>Loading...</div>;
    }
  return (
   
    <div className='flex justify-start gap-7  w-full items-center fixed  bg-black text-white'>
    <img src="hey.jpg" className='h-10' alt=" heelo" />
    <h1>{selectuser.fullname}</h1>
</div >
  )
}
