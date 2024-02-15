import axios from 'axios';
import React, { useState } from 'react'

export const Signup = () => {
    const [user,setUser] = useState({});
    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(user);

        axios.post("https://notesapp-ofp2.onrender.com/users/register",user).then(data=>console.log(data.data)).catch(err=>console.log(err))
    }
  return (
    <div>
        <h3>Sign Up</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter name' onChange={(e)=>setUser({...user,name:e.target.value})}/>
            <input type="text" placeholder='enter email' onChange={(e)=>setUser({...user,email:e.target.value})}/>
            <input type="password" placeholder='enter pass' onChange={(e)=>setUser({...user,pass:e.target.value})}/>
            <button type="submit">Register</button>
        </form>
    </div>
  )
}
