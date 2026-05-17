import React, { useState, useEffect } from 'react'
import Header_Dashboard from '../components/Header_Dashboard'
import { Copy, Check, ExternalLink } from 'lucide-react'
import { getUserLinks } from "../api/user.api"

const MyLinks = () => {
    const [search, setSearch] = useState("")
    const [copiedId, setCopiedId] = useState(null)
    const [links, setLinks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchLinks = async () => {
            try {
                const data = await getUserLinks()
                setLinks(data)
            } catch(err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchLinks()
    }, [])

    const handleCopy = (id, short) => {
        navigator.clipboard.writeText(short)
        setCopiedId(id)
        setTimeout(() => setCopiedId(null), 2000)
    }
    
    const filtered = links.filter(l =>
        l.short_url?.toLowerCase().includes(search.toLowerCase()) ||
        l.full_url?.toLowerCase().includes(search.toLowerCase())
    )

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    }

    return (
        <div className='min-h-screen bg-[#07090f]'>
            <Header_Dashboard/>

            <div className='max-w-4xl mx-auto px-6 py-8'>
                <div className='flex items-start justify-between mb-6'>
                    <div>
                        <h1 className='text-white text-xl font-semibold mb-1'>My links</h1>
                        <p className='text-white/30 text-sm'>All your shortened URLs in one place</p>
                    </div>
                    <div className='flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2'>
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
                            <circle cx="7" cy="7" r="5"/><path d="M11 11l3 3" strokeLinecap="round"/>
                        </svg>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search links..."
                            className='bg-transparent outline-none text-white/60 text-xs placeholder-white/25 w-32'
                        />
                    </div>
                </div>

                <div className='bg-white/4 border border-white/8 rounded-2xl overflow-hidden'>
                    {loading ? (
                        <p className='text-white/30 text-sm text-center py-10'>Loading...</p>
                    ) : filtered.length === 0 ? (
                        <p className='text-white/30 text-sm text-center py-10'>No links found</p>
                    ) : (
                        filtered.map((link, i) => (
                            <div
                                key={link._id}
                                className={`flex items-center gap-3 px-5 py-4 ${i !== filtered.length - 1 ? 'border-b border-white/5' : ''}`}>
                                <div 
                                    onClick={() => window.open(`http://localhost:5000/${link.short_url}`, "_blank")}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='cursor-pointer w-8 h-8 rounded-lg bg-violet-500/15 border border-violet-500/20 flex items-center justify-center shrink-0'>
                                    <ExternalLink 
                                        size={13} 
                                        className='text-violet-400'/>
                                </div>
                                <div className='flex-1 min-w-0'>
                                    <p className='text-violet-400 text-sm font-medium'>
                                        http://localhost:5000/{link.short_url}
                                    </p>
                                    <p className='text-white/25 text-xs truncate mt-0.5'>{link.full_url}</p>
                                </div>
                                <span className='text-white/40 text-xs ml-auto whitespace-nowrap'>
                                    <span className='text-white font-medium'>{link.clicks}</span> clicks
                                </span>
                                <span className='text-white/20 text-xs whitespace-nowrap ml-3'>
                                    {link.createdAt ? formatDate(link.createdAt) : '—'}
                                </span>
                                <button
                                    onClick={() => handleCopy(link._id, link.short_url)}
                                    className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border transition-all ml-2 ${
                                        copiedId === link._id
                                            ? 'text-green-400 border-green-500/30 bg-green-500/10'
                                            : 'text-violet-400 border-violet-500/20 bg-violet-500/10 hover:bg-violet-500/20'
                                    }`}>
                                    {copiedId === link._id ? <Check size={12}/> : <Copy size={12}/>}
                                    {copiedId === link._id ? 'Copied' : 'Copy'}
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default MyLinks