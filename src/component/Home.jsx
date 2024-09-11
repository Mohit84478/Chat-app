import React from 'react'
import { Sidebar } from './Sidebar'

import { Msgbar } from './Msgbar'

const Home = () => {

    return (
        <>
            <div className='text-cyan-50 flex justify-center border-2 h-full '>
                <Sidebar/>
                <div className='border-2 w-[70vh]  justify-between'>

                    <Msgbar/>


                </div>











            </div>

        </>
    )
}

export default Home