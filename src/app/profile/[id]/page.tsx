import React from 'react'

function UserProfile({params}:any) {
  return (
    <div className="grid place-items-center min-h-screen">
        <div>
            <p className='text-4xl'>Welcome <span className="p-2 rounded bg-orange-500 text-black">{params.id}</span></p>
        </div>
    </div>
  )
}

export default UserProfile