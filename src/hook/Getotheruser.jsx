import axios from 'axios'
import React, { useEffect } from 'react'

export const Getotheruser =() => {
   

useEffect(()=>{
 const fetchdata=async()=>{

     try {
        axios.defaults.withCredentials=true;
         const otheruser= await axios.get('http://localhost:8080/api/')
         console.log(otheruser.data)
         
        } catch (error) {
            console.log(error)
        }
    }
    fetchdata();
},[])
  
}
