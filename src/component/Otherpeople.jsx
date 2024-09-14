import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setselectuser } from '../redux/userslice';

export const Otherpeople = ({ user }) => {
  const dispatch= useDispatch()
  const {selectuser}  = useSelector(store => store.user); // Access state
  
   const selecteduser=(user)=>{
     dispatch(setselectuser(user))
   
     
    }
   
  return (
    <div onClick={()=>selecteduser(user)} className={` ${selectuser?._id === user?._id ? 'bg-slate-300':''} flex justify-start gap-5 w-full items-center`}>
      <img src="hey.jpg" className='h-10'  />
      <h1>{user.fullname}</h1> 
     
    </div>
  );
};
