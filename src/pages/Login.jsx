

import React, { use, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, Links, useLocation, useNavigate } from 'react-router';
// import { Helmet } from 'react-helmet-async';
// import { Helmet } from 'react-helmet';

const Login = () => {
  const [error, setError] = useState("")
    const {login, googleLogin} = use(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();
    console.log(location);
    const handleLogin=(e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
        .then((result)=>{
            const user = result.user;
            console.log(user);
            navigate(`${location.state? location.state : "/"}`);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // alert(errorCode, errorMessage);
            setError(errorCode);
          });
        
    }
    const handleGoogleLogin=()=>{
      googleLogin()
      .then(result => {
        console.log(result);
        navigate(`${location.state? location.state : "/"}`);
      })
      .catch(error =>{
        console.log(error);
      })
    }
    return (
        <div className='w-11/12 mx-auto py-5 flex
        justify-center'>
          {/* <Helmet>
            <title>Login</title>
          </Helmet> */}
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl font-bold text-center py-3'>Login your account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
            {/* email */}
          <label className="label">Email</label>
          <input type="email" 
          name='email'
          className="input" placeholder="Email"
          required />
          {/* password */}
          <label className="label">Password</label>
          <input type="password"
          name='password'
          className="input" placeholder="Password" 
          required/>
          <div>
            <Link to="/forgetpass" className="link link-hover">Forgot password?</Link>
            </div>

          {
            error && <p className='text-red-300 text-xs'>{error}</p>
          }
          {/* login button */}
          <button type='submit' className="btn btn-neutral mt-4 mb-1">Login</button>
          <p className='text-sm mb-3'>Dont’t Have An Account ? <Link to="/register">Register</Link> </p>
          
          
        </fieldset>
      </form>
      {/* Google */}
  <button onClick={handleGoogleLogin} className="btn bg-white text-black border-[#e5e5e5] mb-2 w-80 ml-5">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
  </button>
    </div>
        </div>
    );
};

export default Login;