import axios from 'axios';
import React, { useState } from 'react'
import { json } from 'react-router-dom';

export const Login = () => {
    const [user,setUser] = useState({});
    const handleSubmit = (e)=> {
        e.preventDefault();
        // fetch("https://notesapp-ofp2.onrender.com/users/login",{
        //   method:"POST",
        //   headers:{
        //     "Content-type":"application/json"
        //   },
        //   body:JSON.stringify(user)
        // }).then(data=>data.json()).then(item=>localStorage.setItem('token',item.token)).catch(err=>console.log(err))
        axios.post('https://notesapp-ofp2.onrender.com/users/login',user).then(res=>localStorage.setItem('token',res.data.token)).catch(err=>console.log(err))
    }
  return (
    <div>
        <h3>Log in</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter email' onChange={(e)=>setUser({...user,email:e.target.value})}/>
            <input type="text" placeholder='enter pass' onChange={(e)=>setUser({...user,pass:e.target.value})}/>
            <button type="submit">Log in</button>
        </form>
    </div>
  )
}
