import { useState, useEffect } from 'react'
import Header_Dashboard from '../components/Header_Dashboard'
import { getStats, getUserLinks } from '../api/user.api'

const AnalyticsDashboard = () => {
    const [days, setDays] = useState([])
    const [links, setLinks] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [statsData, linksData] = await Promise.all([
                    getStats(),
                    getUserLinks()
                ])
                setDays(statsData)
                setLinks(linksData)
            } catch(err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const maxClicks = Math.max(...days.map(d => d.clicks), 1)
    const totalLinks = links.length
    const totalClicks = links.reduce((sum, l) => sum + l.clicks, 0)
    const thisMonthClicks = links
        .filter(l => new Date(l.createdAt).getMonth() === new Date().getMonth())
        .reduce((sum, l) => sum + l.clicks, 0)
    const topLinks = [...links].sort((a, b) => b.clicks - a.clicks).slice(0, 4)
    const topLink = topLinks[0]

    return (
        <div className='min-h-screen bg-[#07090f]'>
            <Header_Dashboard/>

            <div className='max-w-5xl mx-auto px-6 py-8'>
                <h1 className='text-white text-xl font-semibold mb-1'>Analytics overview</h1>
                <p className='text-white/30 text-sm mb-6'>Track your link performance across all shortened URLs</p>

                {/* Stat cards */}
                <div className='grid grid-cols-4 gap-3 mb-6'>
                    <div className='bg-white/4 border border-white/8 rounded-2xl p-4'>
                        <p className='text-white/35 text-xs uppercase tracking-widest mb-2'>Total links</p>
                        <p className='text-white text-2xl font-semibold'>{totalLinks}</p>
                        <p className='text-white/25 text-xs mt-1'>since you joined</p>
                    </div>
                    <div className='bg-white/4 border border-white/8 rounded-2xl p-4'>
                        <p className='text-white/35 text-xs uppercase tracking-widest mb-2'>Total clicks</p>
                        <p className='text-white text-2xl font-semibold'>{totalClicks.toLocaleString()}</p>
                        <p className='text-white/25 text-xs mt-1'>all time</p>
                    </div>
                    <div className='bg-white/4 border border-white/8 rounded-2xl p-4'>
                        <p className='text-white/35 text-xs uppercase tracking-widest mb-2'>This month</p>
                        <p className='text-white text-2xl font-semibold'>{thisMonthClicks}</p>
                        <p className='text-white/25 text-xs mt-1'>
                            clicks in {new Date().toLocaleDateString('en-US', { month: 'long' })}
                        </p>
                    </div>
                    <div className='bg-white/4 border border-white/8 rounded-2xl p-4'>
                        <p className='text-white/35 text-xs uppercase tracking-widest mb-2'>Top link</p>
                        {topLink ? (
                            <>
                                <p className='text-violet-400 text-base font-semibold mt-1 truncate'>
                                    localhost:5000/{topLink.short_url}
                                </p>
                                <p className='text-white/25 text-xs mt-1'>{topLink.clicks} clicks</p>
                            </>
                        ) : (
                            <p className='text-white/25 text-xs mt-1'>No links yet</p>
                        )}
                    </div>
                </div>

                <div className='bg-white/4 border border-white/8 rounded-2xl p-5 mb-5'>
                    <p className='text-white/60 text-sm font-medium mb-4'>Clicks per day — last 7 days</p>
                    {loading ? (
                        <p className='text-white/30 text-sm text-center py-4'>Loading...</p>
                    ) : (
                        <div className='flex flex-col gap-2.5'>
                            {days.map(({ day, clicks }) => (
                                <div key={day} className='flex items-center gap-3'>
                                    <span className='text-white/35 text-xs w-7 text-right'>{day}</span>
                                    <div className='flex-1 h-2 bg-white/6 rounded-full overflow-hidden'>
                                        <div
                                            className='h-full rounded-full bg-linear-to-r from-violet-600 to-blue-600 transition-all duration-500'
                                            style={{ width: `${(clicks / maxClicks) * 100}%` }}
                                        />
                                    </div>
                                    <span className='text-white/40 text-xs w-6'>{clicks}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <p className='text-white/60 text-sm font-medium mb-3'>Top performing links</p>
                {topLinks.length === 0 ? (
                    <p className='text-white/25 text-sm text-center py-6'>No links yet</p>
                ) : (
                    <div className='grid grid-cols-2 gap-3'>
                        {topLinks.map((link) => (
                            <div key={link._id} className='bg-white/4 border border-white/8 rounded-2xl p-4'>
                                <p className='text-violet-400 text-sm font-medium mb-1 truncate'>
                                    localhost:5000/{link.short_url}
                                </p>
                                <p className='text-white/25 text-xs truncate mb-3'>{link.full_url}</p>
                                <div className='flex items-center gap-2'>
                                    <div className='w-1.5 h-1.5 rounded-full bg-violet-500'/>
                                    <span className='text-white/50 text-xs'>{link.clicks} clicks</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default AnalyticsDashboard