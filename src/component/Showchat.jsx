import React from 'react'
import { useSelector } from 'react-redux'

export const Showchat = ({user}) => {
  const {authuser}=useSelector(store=>store.user)
  return (
    
<div className='border-2 border-l-amber-400 h-[74hv] overflow-y-auto'>

<div className='h-20 flex flex-col  '>

<div className={`flex ${authuser?._id===user?.senderId ? 'justify-end':'justify-start'} gap-5  w-full items-center bg-cyan-500`}>
    <h1>{user?.message}</h1>
    <img src="hey.jpg" className={`flex ${authuser?._id===user?.senderId ? 'justify-end':'justify-start'} h-10` } alt=" heelo" />
</div>
</div>
</div>
   

  )
}
