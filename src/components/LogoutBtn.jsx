import React from 'react'
import authService from './services/auth.js'
import toast from 'react-hot-toast'

function LogoutBtn() {
    const logoutHandler = async () => {
       const logout = await authService.logout()
        if (logout) {
           toast.error("Logout out successfully")
        }
        else{
          toast.error("You already logout")
        }
    
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-red-400 bg-red-600 rounded-full '
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn