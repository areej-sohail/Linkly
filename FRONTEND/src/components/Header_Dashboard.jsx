import Logo from './Logo'
import { LogOut } from 'lucide-react';
import { useUser } from '../context/UserContext'
import { useState } from 'react'
import PopupDashboard from './PopupDashboard';

const Header_Dashboard = () => {
  const { user} = useUser()
  const [open, setOpen] = useState(false)

  return (
    <div className='flex justify-between items-center w-full bg-[#090A12] border-b border-white/5 px-6 py-4'>
      <Logo/>
      <div className='flex items-center gap-3'>
            <div className='relative z-50'>
                <div 
                onClick={()=>setOpen(!open)}
                className=' cursor-pointer flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-1 pr-4 py-1'>
                <div className='w-7 h-7 rounded-full bg-linear-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold'>
                    {user.name?.charAt(0).toUpperCase()}
                </div>
                <span className='text-white/70 text-sm'>{user.name}</span>
                </div>

                <PopupDashboard open={open} setOpen={setOpen}/>
            </div>
      </div>
    </div>
  )
}

export default Header_Dashboard
