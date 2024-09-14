import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Messagechannel } from '../redux/msgslice'

export const Sendinput = () => {
  const[message,setmessage]=useState("")
  const dispatch =useDispatch()
  const { selectuser } = useSelector(item => item.user); // Access state


const inputsubmit= async(e)=>{

  e.preventDefault()
  
  try {
    const url = `http://localhost:8080/api/send/${selectuser?._id}`
     const sms= await axios.post(url,{message},{ headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true})
     console.log(sms);
     dispatch(Messagechannel([...message, sms?.data?.message]))
     
     
    } catch (error) {
      console.log(error);
      
    }
    setmessage("")
  }

  return (
    <form  onSubmit={inputsubmit}  action="">
        <div className='flex flex-row  '>

        <input
            value={message}
            onChange={(e)=>setmessage(e.target.value)}

             className='w-full input input-bordered h-10 border-2 border-black rounded-md text-black'
             type="text"
             placeholder='send msg.....' />
                        <button type="submit" className='bg-green-600 pl-5 pr-5 rounded-xl'>send</button>
       </div>
                    
      </form>
   
  )
}
