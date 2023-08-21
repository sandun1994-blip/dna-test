import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'

const Home = () => {


    const {user} =UserAuth()

  return (

   
    <div>
        <h1>Account</h1>
        <p>User email :{user?.email}</p>
        <div><button onClick={()=>{signOut(auth)}}>LOG OUT</button></div>
    </div>
  )
}

export default Home