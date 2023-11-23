import React, { useState } from "react";
import UseAuth from "../hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa"; 
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase/Firebase.config";
import toast from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, } = UseAuth();
  const [isLoading, setIsLoading] = useState(true);
  const naviGate =useNavigate();
  const location = useLocation();

  
  const from = location.state?.from?.pathname || "/";
  console.log('state in the location login page', location.state)

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {

    const toastID = toast.loading('Logging in...');
  
  signInWithPopup(auth, googleProvider)
    .then(result => {
      setIsLoading(true);
      const user = result.user;
      toast.success('Logged in...', { id: toastID }); 
      naviGate(location?.state ? location?.state : '/'); 
    })
    .catch(error => {
      toast.error(error.message, { id: toastID }); 
    });
};




  const handleSubmit = async (e) => {
    e.preventDefault();
    const toasID = toast.loading('Logging in...');
    try {
      await login(email, password);
      setIsLoading(true);
      toast.success('Logged in ...', {id : toasID});
      naviGate('/');
    } catch (err) {
        toast.error(err.message,{id : toasID});
    }
    
  };


  return (

    <div className="flex flex-col max-w-md mx-auto my-4 p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
          <Helmet>
                <title>Bd Traveling | Login Form </title>
         </Helmet>
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm text-gray-400">Sign in to access your account</p>
      </div>
      <form noValidate="" onClick={handleSubmit} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
                onBlur={(e) => setEmail(e.target.value)}
              />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline text-gray-400"
              >
                Forgot password?
              </a>
            </div>
            <input
                type='password'
                name='password'
                autoComplete='current-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                onBlur={(e) => setPassword(e.target.value)}
              />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            {" "}
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
              >
                Sign in
              </button>
          </div>

          <p className="px-6 text-sm text-center text-gray-400">
            Don't have an account yet?
            <a
              rel="noopener noreferrer"
              className="hover:underline text-violet-400"
            >
              <Link to="/register">
                <button className="btn btn-link">Sign Up</button>
              </Link>
            </a>
          </p>

          <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p onClick={handleGoogleLogin}>Continue with Google</p>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
