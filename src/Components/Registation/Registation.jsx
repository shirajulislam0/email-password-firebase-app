import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase.init';

const Registation = () => {
  const[error,setError]=useState('')
  const[success,setSuccess]=useState(false)
  const[showPassword, setShowPassword]=useState(false)
  const handelSumbit=(e)=>{
    e.preventDefault();
 const email=e.target.email.value
 const pass=e.target.password.value
 const pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
     if (!pattern.test(pass)) {
    setError("Password must have uppercase, lowercase, number & special character");
    return;
  }

//  validation start
if(!email){
  setError('Email is requard')
}
if(!email.includes("@")){
  setError("invalid email")

}
// resat error
setError('')
setSuccess(false)
// validation end
    console.log("then button is now submitted ",email,pass)
    createUserWithEmailAndPassword(auth,email,pass)
    .then( result=>{
      console.log(result.user)
      setSuccess(true)
      e.target.reset()
    })
    .catch((error)=>{
      console.log("error already happend",error)
      setError(error.message)
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen"
    className="hero min-h-screen relative"
      style={{
        backgroundImage: `url(${"/src/assets/mohammad-rahmani-nBXwqxjDa5c-unsplash.jpg"})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handelSumbit}>
          <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input"
          name='email' placeholder="Email" />

          <div className='relative'>
          <label className="label">Password</label>
          <input type="password" className="input"
          name='password' placeholder="Password" />
          <button
          onClick={()=>{setShowPassword(!showPassword)}}
           className="btn btn-sm absolute  right-3 ">Small</button>
          </div>

          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Registation</button>
        </fieldset>
        {success&& <p style={{color:"green"}}>Account create successfully</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        
        </form>
      </div>
    </div>
  </div>
</div>
  );
};

export default Registation;