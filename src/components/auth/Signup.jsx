import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'

const Signup = () => {
    const {createUser} =UserAuth()
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [error,setError]=useState('')
const navigate=useNavigate()


const handleSubmit=async()=>{
     setError('')

     try {
   
    await createUser(email,password)
    navigate('/admin')
     } catch (error) {
        setError(error)
        console.log(error);
     }
}

  return (
    <div>
<h1>sign in to your account</h1>
<p>
    Already have an account yet <Link to={'/'}>Sign In</Link>
</p>
<div>
    <label>Email adress</label>
    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
</div>
<div>
    <label>Password</label>
    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
</div>
<div>
   
   <button onClick={handleSubmit}>sign up</button>
</div>
    </div>
  )
}

export default Signup