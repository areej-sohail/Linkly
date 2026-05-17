import React from 'react'
import Logo from './Logo'
import { useUser } from '../context/UserContext'
import { logOutUser } from '../api/user.api'
import { useNavigate } from 'react-router-dom'
import RegisterButton from './RegisterButton'
import LoginButton from './LoginButton'

const Header = () => {
  const { user, setUser } = useUser()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logOutUser()
    setUser(null)
    navigate("/login")
  }

  return (
    <div className='flex justify-between items-center w-full bg-[#090A12] border-b border-white/5 px-6 py-4'>
      <Logo/>

      <div className='flex items-center gap-3'>
        {user ? (
          <>
            {/* Avatar circle with first letter of name */}
            <div className='flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-1 pr-4 py-1'>
              <div className='w-7 h-7 rounded-full bg-linear-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold'>
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <span className='text-white/70 text-sm'>{user.name}</span>
            </div>

            {/* Logout button */}
            <button
              onClick={handleLogout}
              className='bg-blue-500 text-white px-8 py-4 rounded-full text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-blue-500 active:bg-blue-700'>
              Logout
            </button>
          </>
        ) : (
          <>
            <LoginButton/>
            <RegisterButton/>
          </>
        )}
      </div>
    </div>
  )
}

export default Header