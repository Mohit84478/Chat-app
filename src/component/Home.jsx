import React from 'react'
import { Sidebar } from './Sidebar'

import { Msgbar } from './Msgbar'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
import { Sendinput } from './Sendinput'

const Home = () => {
    const navigate =useNavigate()
    const logoutbutton= async()=>{
        try {
              const res =await axios.get('http://localhost:8080/api/logout')
              console.log(res.status)  
              navigate("/") 
              
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='text-cyan-50 flex justify-center border-2 h-full '>
                <Sidebar/>
                <button onClick={logoutbutton}>logout</button>
                <div className='border-2 w-[70vh]  justify-between'>

                    <Msgbar/>
                 
                    <Sendinput/>
                </div>











            </div>

        </>
    )
}

export default Home