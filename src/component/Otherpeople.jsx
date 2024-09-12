import React from 'react';

export const Otherpeople = ({ user }) => {
  
  return (
    <div className='flex justify-start gap-5 w-full items-center'>
      <img src="hey.jpg" className='h-10'  />
      <h1>{user.fullname}</h1> 
      <h1>{user.fullname}</h1> 
    </div>
  );
};
