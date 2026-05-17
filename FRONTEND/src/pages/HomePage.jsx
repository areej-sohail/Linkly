import React from 'react'
import UrlForm from '../components/UrlForm'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header/>
      <div className='text-center mt-12'>
        <div class="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-widest text-violet-400 mb-8 border border-violet-500/30 bg-violet-500/10">
          
          <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-violet-400 inline-block"></span>
            NOW WITH ANALYTICS DASHBOARD
        </div>
        <h1 
          className='leading-tight tracking-tight fade-up bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-extrabold text-5xl w-fit mx-auto'>
          Every link, under control</h1>
        <h2 
          className='fade-up leading-relaxed  text-slate-500 mt-5 max-w-md text-lg mx-auto'>
          Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</h2>
      </div>
      <UrlForm/>

      <section className="relative z-10 py-24 px-16 max-w-6xl mx-auto">
        <p className="text-center text-xs tracking-widest text-indigo-400 mb-3">WHY LINKLY</p>

        <h2 className="font-syne font-extrabold text-center text-slate-100 mb-14 tracking-tight text-[clamp(1.8rem,3vw,2.6rem)]">
          Not just shorter — smarter
        </h2>

        <div className="grid grid-cols-3 gap-5">

          <div className="feat-card rounded-3xl p-9 border border-white/7 cursor-default bg-[rgba(255,255,255,0.03)]">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-xl border border-indigo-500/25 bg-indigo-500/12">
              📊
            </div>
            <div className="font-syne font-bold text-slate-100 text-lg mb-2">Analytics Dashboard</div>
            <div className="text-slate-500 text-sm leading-relaxed">
              Track clicks, locations, devices and referrers in real time. Know exactly how your links perform.
            </div>
          </div>

          <div className="feat-card rounded-3xl p-9 border border-white/7 cursor-default bg-[rgba(255,255,255,0.03)]">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-xl border border-blue-500/25 bg-blue-500/12">
              ✂️
            </div>
            <div className="font-syne font-bold text-slate-100 text-lg mb-2">Custom Short Links</div>
            <div className="text-slate-500 text-sm leading-relaxed">
              Choose your own slug. Make links that are short, memorable, and completely on-brand.
            </div>
          </div>

          <div className="feat-card rounded-3xl p-9 border border-white/7 cursor-default bg-[rgba(255,255,255,0.03)]">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-xl border border-pink-500/25 bg-pink-500/12">
              🔒
            </div>
            <div className="font-syne font-bold text-slate-100 text-lg mb-2">Secure & Reliable</div>
            <div className="text-slate-500 text-sm leading-relaxed">
              99.9% uptime with SSL encryption on every link. Your links never go down when it matters most.
            </div>
          </div>

        </div>
      </section>

      <section className="relative z-10 py-10 pb-24 px-6">
        <div className="max-w-lg mx-auto">
          <p className="text-center text-xs tracking-widest text-indigo-400 mb-3">SIMPLE PROCESS</p>

          <h2 className="font-syne font-extrabold text-center text-slate-100 mb-12 tracking-tight text-[clamp(1.8rem,3vw,2.6rem)]">
            Three steps, done.
          </h2>

          <div className="flex flex-col gap-0">

            <div className="flex gap-5 items-start">
              <div className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center font-syne font-extrabold text-white text-sm bg-linear-to-br from-indigo-500 to-pink-500 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                1
              </div>
              <div className="pb-8">
                <div className="font-syne font-bold text-slate-100 mb-1">Paste your long URL</div>
                <div className="text-slate-500 text-sm leading-relaxed">
                  Drop any URL — no matter how long or messy — into the input bar on the homepage.
                </div>
              </div>
            </div>

            <div className="w-px h-6 bg-linear-to-b from-indigo-500/30 to-transparent ml-5 -mt-4 mb-2"></div>

            <div className="flex gap-5 items-start">
              <div className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center font-syne font-extrabold text-white text-sm bg-linear-to-br from-indigo-500 to-pink-500 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                2
              </div>
              <div className="pb-8">
                <div className="font-syne font-bold text-slate-100 mb-1">Get your short link instantly</div>
                <div className="text-slate-500 text-sm leading-relaxed">
                  Linkly generates a clean, shareable link in milliseconds. Copy it with one click.
                </div>
              </div>
            </div>

            <div className="w-px h-6 bg-linear-to-b from-indigo-500/30 to-transparent ml-5 -mt-4 mb-2"></div>

            <div className="flex gap-5 items-start">
              <div className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center font-syne font-extrabold text-white text-sm bg-linear-to-br from-indigo-500 to-pink-500 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                3
              </div>
              <div>
                <div className="font-syne font-bold text-slate-100 mb-1">Track every click</div>
                <div className="text-slate-500 text-sm leading-relaxed">
                  Log in to see a full analytics breakdown — who clicked, from where, on what device.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 pb-28 text-center">
        <div className="max-w-2xl mx-auto rounded-3xl px-16 py-20 border border-indigo-500/20 relative overflow-hidden bg-[linear-gradient(135deg,rgba(99,102,241,0.1),rgba(236,72,153,0.07))]">
          
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-40 pointer-events-none bg-[radial-gradient(circle,rgba(99,102,241,0.2),transparent_70%)] blur-2xl"></div>

          <h2 className="font-syne font-extrabold text-slate-100 text-4xl mb-4 tracking-tight relative z-10">
            Ready to take control?
          </h2>

          <p className="text-slate-500 mb-10 leading-relaxed relative z-10">
            Join thousands of users who trust Linkly to manage, share and track their links every day.
          </p>

          <button
            onClick={()=>navigate("/auth/login")} 
            className="relative z-10 text-white px-10 py-4 rounded-full font-syne font-bold text-base inline-flex items-center gap-2 transition-all hover:-translate-y-1 bg-linear-to-br from-indigo-500 to-blue-500 shadow-[0_8px_30px_rgba(99,102,241,0.4)]">
            Get Started Free →
          </button>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/5 px-16 py-7 flex justify-between items-center flex-wrap gap-4">
        <div className="bg-clip-text text-transparent bg-linear-to-r from-pink-500 to-blue-600 font-syne font-extrabold text-xl logo-grad">Linkly</div>

        <div className="flex gap-8">
          <a href="#" className="text-slate-600 text-sm hover:text-slate-400 transition-colors">About</a>
          <a href="#" className="text-slate-600 text-sm hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#" className="text-slate-600 text-sm hover:text-slate-400 transition-colors">Terms of Service</a>
        </div>

        <div className="text-slate-800 text-sm">© 2026 Linkly. All rights reserved.</div>
      </footer>
    </>
  )
}

export default HomePage
