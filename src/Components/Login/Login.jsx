import React from 'react';
const Login = () => {
  return (
    <div
      className="hero min-h-screen relative"
      style={{
        backgroundImage: `url(${'/src/assets/daniele-franchi-GbAEJUJKJ88-unsplash.jpg'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="hero-content relative z-10">
        <div className="card bg-base-100/90 backdrop-blur-md w-full max-w-6xl shadow-2xl">
          <div className="card-body">

            <h2 className="text-2xl font-bold text-center mb-4">
              Login
            </h2>

            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />

              <label className="label mt-2">Password</label>
              <input type="password" className="input" placeholder="Password" />

              <div className="mt-2">
                <a className="link link-hover">Forgot password?</a>
              </div>

              <button className="btn btn-neutral mt-4">
                Login
              </button>
            </fieldset>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;