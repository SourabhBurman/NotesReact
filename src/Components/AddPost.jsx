import axios from 'axios';
import React, { useState } from 'react'

export const AddPost = () => {
    const [note,setNote] = useState({});
    const handleSubmit = (e)=> {
        e.preventDefault();
        axios.post('https://notesapp-ofp2.onrender.com/notes',note,{
            headers:{
              Authorization : `Bearer ${localStorage.getItem("token")}`
            }
          }).then(res=>console.log(res.data)).catch(err=>console.log(err))
    }
  return (
    <div>
        <h3>Add Note</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='enter title' onChange={(e)=>setNote({...note,title:e.target.value})}/>
            <input type="textarea" placeholder='enter body' onChange={(e)=>setNote({...note,body:e.target.value})}/>
            <button type="submit">Create</button>
        </form>
    </div>
  )
}
