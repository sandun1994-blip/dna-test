import React, { useState } from 'react'
import styles from "../../styles/page.module.css";
import variables from "../../styles/variables.module.scss";
import adminCss from "../../styles/admin.module.scss";
import pic from './ahs_logo.png'
import { signInWithCredential, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';


const Signin = () => {

const navigate=useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   const handleSubmit=async()=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
        navigate('/admin')
    } catch (error) {
        console.log(error);
    }
   }
  return (
    <><div className={variables.gradient}></div>
    <main className={styles.main}>
      <div className={variables.ahsLogo}>
        <img src={pic}  alt="AHS Logo" />
        <p>
          Assessment of Cardiovascular Risk Factor Levels of Vegetarians and
          Non-Vegetarians
        </p>
      </div>
      <div className={adminCss.loginContainer}>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={adminCss.btn} onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </main></>
  )
}

export default Signin