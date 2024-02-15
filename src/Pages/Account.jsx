import React, { useState } from 'react'
import { Signup } from '../Components/Signup'
import { Login } from '../Components/Login'

export const Account = () => {
    const [show,setShow] = useState(false);
  return (
    <>
    <button onClick={()=>setShow(!show)}>{show?"Login":"Signup"}</button>
    {show?<Signup />:<Login />}
    </>
  )
}
