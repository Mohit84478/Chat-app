import axios from 'axios'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { otherUsers } from '../redux/userslice'
export const Getotheruser =() => {
    const dispatch = useDispatch() 
   

useEffect(()=>{
 const fetchdata=async()=>{

     try {
        axios.defaults.withCredentials=true;
         const res= await axios.get('http://localhost:8080/api/')
         console.log(res.data)
         dispatch(otherUsers(res.data))
         
        } catch (error) {
            console.log(error)
        }
    }
    fetchdata();
},[dispatch])
  
}
