import React from 'react'
import { LogIn } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const LoginButton = () => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate("/auth/login")}
      className='bg-[#07090f] flex text-white px-8 py-4 rounded-full text-sm font-semibold border border-white/15 transition-all hover:border-white/35 hover:text-slate-200 cursor-pointer'>
      Login<LogIn size={20} className='ml-2'/>
    </button>
  )
}

export default LoginButton
