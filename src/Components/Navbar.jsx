import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiAddBoxFill } from "react-icons/ri";


export const Navbar = () => {
  return (
    <div style={{display:"flex",gap:"5%",justifyContent:"center" , marginBottom:"100px"}}>
        <NavLink to="/account">Account</NavLink>
        <NavLink to="/">Notes</NavLink>
        <NavLink to="/addPost" ><RiAddBoxFill /></NavLink>
    </div>
  )
}
