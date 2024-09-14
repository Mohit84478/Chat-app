import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Messagechannel } from '../redux/msgslice';


export const Usegetmsg = () => {
    const selectuser = useSelector(store => store.user.selectuser); // Access state
    const dispatch =useDispatch()
    useEffect(() => {
        const getmsg = async () => {
           
            try {
                axios.defaults.withCredentials = true;
                const url = `http://localhost:8080/api/${selectuser?._id}`;
               
                const res = await axios.get(url);
                console.log("Response data:", res);
                dispatch(Messagechannel(res.data))
            } catch (error) {
                console.log("Error during API request:", error);
            }
        };

        getmsg();
    }, [selectuser]); 

    return null; 
};
