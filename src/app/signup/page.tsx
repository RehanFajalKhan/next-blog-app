"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { NextResponse } from "next/server";

const SignUpPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled,setButtonDisabled] = useState(true);

  const onSignup = async () => {
    
    try {
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success",response.data);
      toast.success("registration done");
      router.push("/login");
    } catch (err: any) {
        toast.error(err.response.data.error)
    }
  };

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 7 && user.username.length > 0) {
      setButtonDisabled(false) 
    } else {
      setButtonDisabled(true)
    }
  },[user])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col w-80">
      <h1 className="text-2xl font-bold text-primary">Sign up</h1>
      <br />
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="p-2 border mb-4 rounded-lg bg-gray-200 focus:outline-none focus:border-primary"
        placeholder="username"
        
      />

      <label htmlFor="useremail">Email</label>
      <input
        type="email"
        id="useremail"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="p-2 border mb-4 rounded-lg bg-gray-200 focus:outline-none focus:border-primary"
        placeholder="xyz@gmail.com"
      />

      <label htmlFor="userpassword">Password</label>
      <input
        type="password"
        id="userpassword"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="p-2 border mb-4 rounded-lg bg-gray-200 focus:outline-none focus:border-primary"
        placeholder="********"
        autoComplete="on"
      />
      <button
          disabled={buttonDisabled}
          onClick={onSignup}
          className="p-2 rounded-lg mb-4 focus:outline-none bg-primary focus:bg-primary-dark disabled:bg-slate-200 disabled:cursor-not-allowed"
        >
          Signup
        </button>

      <Link href="/login" className="text-blue-700 underline">Visit login page</Link>
      </div>
      
    </div>
  );
};

export default SignUpPage;
