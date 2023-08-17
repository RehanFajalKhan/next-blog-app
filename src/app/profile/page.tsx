"use client";
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast'

function Profile() {
  const router = useRouter();
  const [data,setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get('/api/users/logout');
      toast.success("logout successfully");
      router.push("/login");
    } catch (error : any) {
      toast.error(error.message);
    }
  }
  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/me");
      console.log(res.data);
      setData(res.data.data._id);
    } catch (error) {
      
    }
  }
  return (
    <div className="flex flex-col justify-center items-center">
        <div>
            <h1>profile page</h1>
            <h2 className='padding rounded bg-indigo-400'>{data === "nothing" ? "Nothing" : (
              <Link href={`/profile/${data}`}>{data}</Link>
            )}</h2>
            <br />
            <button onClick={logout} className='bg-blue-500 text-white p-1 rounded-md'>Logout</button>
            <br />
            <button onClick={getUserDetails} className='bg-amber-300 text-white p-1 rounded-md'>getUserDetails</button>
        </div>
    </div>
  )
}

export default Profile