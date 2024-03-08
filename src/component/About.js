import React,{useContext, useEffect} from 'react'
import Navbar from './Navbar'
import noteContext from '../context/notes/noteContext'


const About=()=>{
  return(
    <>
    <Navbar/>
    This is About
    </>
  )
}


export default About;