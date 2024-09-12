import React from 'react';
import { useSelector } from 'react-redux';
import { Getotheruser } from '../hook/Getotheruser';
import { Otherpeople } from './Otherpeople';

export const Sidebar = () => {
    Getotheruser()
    const { otherUser } = useSelector(item => item.user); // Access state

    if (!otherUser) {
        return <div>Loading...</div>; // Fallback UI
    }
    const name=otherUser;

   
    return (
        <div className='text-cyan-50 flex justify-center border-2 h-full'>
            <div className='border-2 w-[50vh] flex flex-col gap-5 items-center'>
                <div className='flex'>
                    <input type="search" className='w-80 rounded-xl' placeholder="Search..." />
                    <button className='bg-white text-black rounded-lg'>Search</button>
                </div>
            
               
                {   
                    name.map((user, index) => (
                        <Otherpeople key={user.id || index} user={user} />
                    ))
                }
            </div>
        </div>
    );

}
