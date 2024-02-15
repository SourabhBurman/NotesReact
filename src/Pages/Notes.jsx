import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdEditOff } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
export const Notes = () => {
   const [arr,setArr] = useState([]);
    useEffect(()=> {
        axios.get('https://notesapp-ofp2.onrender.com/notes',{
          headers:{
            Authorization : `Bearer ${localStorage.getItem("token")}`
          }
        }).then(res=>setArr(res.data.notes)).catch(err=>console.log(err))
    },[])
    const handleDelete = (id)=> {
      axios.delete(`https://notesapp-ofp2.onrender.com/notes/${id}`,{
        headers:{
          Authorization : `Bearer ${localStorage.getItem("token")}`
        }
      }).then(res=>console.log(res.data)).catch(err=>console.log(err))
      setArr(arr.filter(e=>e._id!=id))
    }
  return (
    <>
    <h2>Notes</h2>
     <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)", gap:"4%",padding:"2%"}}>
        {arr.map(ele=><div key={ele._id} style={{border:"solid 1px", borderRadius:"8px"}}>
            <h3>title : {ele.title}</h3>
            <h4>body : {ele.body}</h4>
            <div style={{display:"flex", justifyContent:"space-around" ,padding:"2%"}}>
              <button><MdEditOff /></button>
              <button onClick={()=>handleDelete(ele._id)}><MdDeleteForever /></button>

            </div>
        </div>)}
     </div>
    </>
  )
}
