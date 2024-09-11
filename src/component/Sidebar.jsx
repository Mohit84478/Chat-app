import React from 'react'
import { Getotheruser } from '../hook/Getotheruser';

export const Sidebar = () => {
    Getotheruser();
  return (
    <div className='text-cyan-50 flex justify-center border-2 h-full '>
                <div className='border-2 w-[50vh] flex flex-col gap-5 items-center'>
                    <div className='flex '>


                        <input type="search" className='w-80 rounded-xl' />

                        <button className='bg-white text-black rounded-lg'>serach</button>
                    </div>
                    <div className='flex justify-start gap-5 w-full items-center'>
                        <img src="hey.jpg" className='h-10' alt=" heelo" />
                        <h1>name1</h1>
                    </div>
                    <div className='flex justify-start gap-5 w-full items-center'>
                        <img src="hey.jpg" className='h-10' alt=" heelo" />
                        <h1>name1</h1>
                    </div>
                    <div className='flex justify-start gap-5 w-full items-center'>
                        <img src="hey.jpg" className='h-10' alt=" heelo" />
                        <h1>name1</h1>
                    </div>
                    <div className='flex justify-start gap-5 w-full items-center'>
                        <img src="hey.jpg" className='h-10' alt=" heelo" />
                        <h1>name1</h1>
                    </div>
                    <div className='flex justify-start gap-5 w-full items-center'>
                        <img src="hey.jpg" className='h-10' alt=" heelo" />
                        <h1>name1</h1>
                    </div>

                </div>
                </div>
  )
}
