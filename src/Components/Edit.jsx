import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const Edit = () => {
    const {id} = useParams();
    const [obj,setObj] = useState({});

    const handleEdit = (e)=> {
        e.preventDefault();
        axios.patch(`https://notesapp-ofp2.onrender.com/notes/${id}`,obj,{
          headers:{
            Authorization : `Bearer ${localStorage.getItem("token")}`
          }
        }).then(res=>console.log(res.data)).catch(err=>console.log(err))

      }
  return (
    <div>
        <form onSubmit={handleEdit}>
            <input type="text" placeholder='title' onChange={(e)=>setObj({...obj,title:e.target.value})}/>
            <input type="text" placeholder='body' onChange={(e)=>setObj({...obj,body:e.target.value})}/>
            <button type='submit'>save</button>
        </form>
    </div>
  )
}
