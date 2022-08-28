import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Login.css'
import Navbar from './Navbar';
import { Ucontext } from './Usercontext';
const Login = () => {

  const context1=useContext(Ucontext);

  const Login_form = ()=>{
    let email=document.querySelector("#email-s").value;
    let password=document.querySelector("#pass-l").value;

    

    context1.userdetails.map((i)=>{
      if(i.email === email && i.password === password)
      {
        alert("login successfull");
        context1.setSecretPass(i.password)
      }
      else{
        alert("Details not matched");
      }
    })
  }

  return (
    <div>
         <Navbar/>
         <div className='form-signup'>
        
          Email:  <input type='text' placeholder='Enter your Email' id="email-s"/> <br></br>
        
          Password:  <input type='text' placeholder='Enter your password' id='pass-l'/> <br></br>
            <button onClick={Login_form} className='bt'>Login</button>
      
        
       </div>
    </div>
  )
}

export default Login
