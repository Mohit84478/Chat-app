import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const Usegetmsg = () => {
    const {selectuser}  = useSelector(store => store.user); // Access state
    
    console.log(selectuser?._id)
  useEffect(()=>{
const getmsg = async()=>{
try { 
    axios.defaults.withCredentials=true;
    const res=await axios.get(`http://localhost:8080/api/${selectuser?._id}`)
    console.log("hello")
    console.log(res)
} catch (error) {
    console.log(error)
}
}
getmsg();
  },[])
  
}
