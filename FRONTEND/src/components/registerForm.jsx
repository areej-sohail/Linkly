import { useState } from 'react'
import { registerUser } from '../api/user.api'
import { Eye, EyeOff } from 'lucide-react';
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
import Header_Form from './Header_Form';

const RegisterForm = () => {
    const { setUser } = useUser()
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            setLoading(true)
            const data = await registerUser(name, email, password)
            setUser(data.user) 
        } catch (err) {
            console.log("FULL ERROR:", err)
        console.log("RESPONSE:", err.response)
        console.log("MESSAGE:", err.response?.data)
            setError(err.message || "Registration failed")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Header_Form/>
            <div className="min-h-screen bg-[#0d0f1a] flex items-center justify-center px-4">
                <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-8">

                    <p className="text-2xl font-extrabold bg-linear-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">
                        Linkly
                    </p>

                    <h2 className="text-white text-xl font-semibold mt-4 mb-1">Create an account</h2>
                    <p className="text-white/40 text-sm mb-6">Start shortening links for free</p>

                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl px-4 py-3 mb-4">
                            {error}
                        </div>
                    )}

                    <div className="mb-4">
                        <label className="text-white/50 text-xs uppercase tracking-widest mb-2 block">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-violet-500/50 transition-all"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-white/50 text-xs uppercase tracking-widest mb-2 block">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-violet-500/50 transition-all"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="text-white/50 text-xs uppercase tracking-widest mb-2 block">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pr-11 text-white text-sm placeholder-white/20 outline-none focus:border-violet-500/50 transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors">
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                        <p className="text-white/25 text-xs mt-2">Min 8 characters</p>
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-full py-3 rounded-xl bg-linear-to-r from-violet-600 to-blue-600 text-white font-semibold text-sm hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                        {loading ? "Creating account..." : "Create account →"}
                    </button>

                    <p className="cursor-pointer text-center text-white/40 text-sm mt-6">
                        Already have an account?{" "}
                        <span 
                            onClick={()=>navigate("/auth/login")}
                            className="text-violet-400 font-medium hover:text-violet-300 transition-colors">
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default RegisterForm