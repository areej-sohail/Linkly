import React, { useState } from 'react'
import { Link } from 'lucide-react'
import { Copy, Check } from 'lucide-react';
import { createShortUrl } from '../api/shortUrl.api';
import { useUser } from '../context/UserContext'

const UrlForm = () => {
    const { user } = useUser()
    const [url, setUrl] = useState("")
    const [slug, setSlug] = useState("")
    const [shortUrl, setShortUrl] = useState("")
    const [copied, setCopied] = useState(false)
    const [error, setError] = useState("") 

    const SubmitHandler = async () => {
        try {
            setError("") 
            const data = await createShortUrl(url, slug || undefined)
            console.log("SUCCESS RESPONSE:", data)
            setShortUrl(data.shortUrl)
            setUrl("")
            setSlug("")
        } catch (error) {
            setError(error.message || "Something went wrong")
            console.log("ERROR RESPONSE:", error.response)
            console.log("ERROR MESSAGE:", error.response?.data)
        }
    }

    const CopyHandler = () => {
        navigator.clipboard.writeText(shortUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <>
            <div className="flex fade-up mx-auto items-center bg-[#6366F112] rounded-full pl-4 pr-2 h-16 max-w-xl mt-13 border-2 border-violet-500/20 overflow-hidden">
                <Link className="text-gray-400 ml-2 mr-3" size={22} />
                <input
                    id='url'
                    type="url"
                    value={url}
                    required
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Paste the long URL here..."
                    className="bg-transparent border-none outline-none text-slate-200 flex-1 text-base placeholder-slate-700 font-dm"
                />
                <button
                    onClick={SubmitHandler}
                    className="bg-blue-500 text-sm text-white rounded-full font-semibold px-6 h-12 my-auto cursor-pointer transition-all duration-200 hover:bg-blue-500 active:bg-blue-700">
                    Shorten Now!
                </button>
            </div>

            {error && (
                <div className="max-w-xl mx-auto mt-3 px-4 py-2 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400/70 text-xs font-semibold text-center">
                    {error}
                </div>
            )}

            {user && (
                <div className="flex mx-auto items-center max-w-xl mt-5 gap-2">
                    <div className="flex flex-1 items-center bg-white/5 border border-white/10 rounded-full px-4 h-11 gap-2">
                        <span className="text-white/25 text-sm whitespace-nowrap">lnkly.io/</span>
                        <div className="w-px h-4 bg-white/10"/>
                        <input
                            type="text"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            placeholder="your-custom-slug"
                            className="bg-transparent border-none outline-none text-violet-400 text-sm flex-1 placeholder-white/20"
                        />
                    </div>
                </div>
            )}

            {shortUrl && (
                <div
                    id='result'
                    className='flex items-center justify-between bg-[#6366F112] rounded-3xl pl-4 pr-2 h-19 max-w-xl mx-auto mt-5 border-2 border-violet-500/20 overflow-hidden'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-indigo-400 text-sm font-extralight ml-3'>
                            YOUR SHORT LINK IS READY
                        </h1>
                        <h1 className='ml-3 text-xl text-violet-400'>
                            {shortUrl}
                        </h1>
                    </div>
                    <button
                        onClick={CopyHandler}
                        className={`flex items-center mr-2 gap-2 border font-semibold px-5 py-2 outline-none rounded-full transition-all font-dm ${
                            copied
                                ? 'text-green-400 border-green-500/30 bg-green-500/15 hover:bg-green-500/25'
                                : 'text-violet-400 border-violet-500/30 bg-violet-500/15 hover:bg-violet-500/25'
                        }`}>
                        <span className={copied ? 'text-green-300' : 'text-violet-300'}>
                            {copied ? <Check size={20} /> : <Copy size={20} />}
                        </span>
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            )}
        </>
    )
}

export default UrlForm