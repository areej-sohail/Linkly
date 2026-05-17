import { useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react';
import { useUser } from '../context/UserContext'
import { logOutUser } from '../api/user.api'
import { useRef, useEffect } from 'react';

const PopupDashboard = ({ open, setOpen }) => {
    const { user, setUser } = useUser()
    const navigate = useNavigate()
    const popupRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [setOpen])

    const handleLogout = async () => {
        try {
            await logOutUser()
        } catch(err) {
            console.log("LOGOUT ERROR:", err)
        } finally {
            setUser(null)
            localStorage.removeItem("user")
            navigate("/")
        }
    }

    return (
        <>
        {open && (
            <div
                ref={popupRef} 
                className='bg-[#111827] border border-white/10 mt-4 w-56 h-70 absolute -right-1 rounded-2xl z-50'>
                <div className='flex items-center gap-3 px-4 py-3 border-b border-white/10'>
                    <div className='w-9 h-9 rounded-full bg-linear-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold shrink-0'>
                        {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <p className='text-white text-sm font-medium'>{user?.name}</p>
                        <p className='text-white/35 text-xs'>{user?.email}</p>
                    </div>
                </div>

                <div className='py-1'>
                    <p className='text-white/20 text-[10px] uppercase tracking-widest px-4 pt-2 pb-1'>Navigate</p>

                    <button
                        onClick={() => { navigate("/dashboard"); setOpen(false) }}
                        className='w-full flex items-center gap-3 px-4 py-2 text-white/70 text-sm hover:bg-white/5 transition-all text-left'>
                        Dashboard
                    </button>


                    <button
                        onClick={() => { navigate("/dashboard/analytics"); setOpen(false) }}
                        className='w-full flex items-center gap-3 px-4 py-2.5 text-white/70 text-sm hover:bg-white/5 transition-all text-left'>
                        Analytics dashboard
                    </button>

                    <button
                        onClick={() => { navigate("/dashboard/links"); setOpen(false) }}
                        className='w-full flex items-center gap-3 px-4 py-2.5 text-white/70 text-sm hover:bg-white/5 transition-all text-left'>
                        My links
                    </button>

                    <div className='h-px bg-white/10 my-1'/>
                    <p className='text-white/20 text-[10px] uppercase tracking-widest px-4 pt-2 pb-1'>Account</p>

                    <button
                        onClick={handleLogout}
                        className='w-full flex items-center gap-3 px-4 py-1.5 text-red-400 text-sm hover:bg-white/5 transition-all text-left'>
                        <LogOut size={18} className='-mr-1'/>
                        Logout
                    </button>
                </div>
            </div>
        )}
        </>
    )
}

export default PopupDashboard