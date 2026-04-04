import React from 'react';

const Registation = () => {
  const handelSumbit=(e)=>{
    e.preventDefault();
 const email=e.target.email.value
 const pass=e.target.password.value
    console.log("then button is now submitted ",email,pass)
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
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
          <label className="label">Password</label>
          <input type="password" className="input"
          name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Registation</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
  );
};

export default Registation;