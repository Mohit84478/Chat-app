import React from 'react'
import  { Link } from 'react-router-dom';
function header() {
    return (
        <div className='flex justify-between bg-black text-cyan-100 h-16 items-center  '>
            <div className=' ml-8'>
                chat app
            </div>
            <div>
                logo
            </div>
            <div className='mr-8 gap-10 flex'>
                <a href="/">sign in</a>
                <a href="/login"> login</a>
            </div>
           

           
            
               

        </div>
    )
}

export default header