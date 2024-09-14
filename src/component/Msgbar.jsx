import React from 'react'
import { Usegetmsg } from '../hook/Usegetmsg'
import { useSelector } from 'react-redux'
import { Showchat } from './Showchat'
import { Username } from './Username'



export const Msgbar = () => {
    Usegetmsg()
    const messagechat=useSelector(store=>store.chatmsg.messagechat)
    if (!messagechat) {
        return <div>Loading...</div>;
    }
    

    
    console.log(messagechat)
  return (
    <div className='border-2 w-[70vh] h-[85vh]  justify-between gap-5 overflow-y-auto '>

     <Username/>
{   
                    messagechat?.map((user, index) => (
                        <Showchat key={user.id || index} user={user} />
                    ))
                }

         
                    
                    </div>
  )
}
