"use client";
import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      const response = await axios.post("/api/users/login", user);
      // console.log(response.data);
      // console.log(response.status);
      toast.success(response.data.message);
      router.push("/profile");
    } catch (err: any) {
      toast.error(err.response.data.error);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 7) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col w-80">
        <h1 className="text-2xl font-bold text-primary">Sign in</h1>
        <br />

        <label htmlFor="useremail">Email</label>
        <input
          type="text"
          id="useremail"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="p-2 border mb-4 rounded-lg bg-gray-200 focus:outline-none focus:border-primary"
          placeholder="useremail"
        />

        <label htmlFor="userpassword">Password</label>
        <input
          type="password"
          id="userpassword"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="p-2 border mb-4 rounded-lg bg-gray-200 focus:outline-none focus:border-primary"
          placeholder="********"
        />
        <button
          disabled={buttonDisabled}
          onClick={onLogin}
          className="p-2 rounded-lg mb-4 focus:outline-none bg-primary focus:bg-primary-dark disabled:bg-slate-200 disabled:cursor-not-allowed"
        >
          Login
        </button>

        <Link href="/signup" className="text-blue-700 underline">
          Visit Signup page
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
