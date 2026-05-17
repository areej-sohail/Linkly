import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegisterButton = () => {
  const navigate = useNavigate()
  return (
    <button 
      onClick={() => navigate("/auth/register")}
      className='bg-blue-500 text-white px-8 py-4 rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-blue-500 active:bg-blue-700'>
      Register Now
    </button>
  )
}

export default RegisterButton
