import React, { useState } from "react";
import UseAuth from "../hooks/UseAuth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from 'react-helmet-async';



const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const {createUser, user} = UseAuth()
  const naviGate =useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
       await createUser(email,password)
       toast.success('Logged in...'); 
      naviGate('/');
    } catch (err) {
        toast.error(err.message);
    }
  };
  return (
    <div className="flex flex-col max-w-md mx-auto my-4 p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
      <Helmet>
                <title>Bd Traveling | Register Form </title>
         </Helmet>
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
        <p className="text-sm text-gray-400">Sign Up to access your account</p>
      </div>
      <form noValidate="" onSubmit={handleSubmit} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Your Full Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Type your Name"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              required
              onBlur={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Type your mail id"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              required
              onBlur={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              {/* <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline text-gray-400"
              >
                Forgot password?
              </a> */}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              required
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              onBlur={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
            >
              Sign up
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-400">
            Don't have an account yet?
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:underline text-violet-400"
            ><Link to="/login"><button className="btn btn-link">Sign In</button></Link></a>
    
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
