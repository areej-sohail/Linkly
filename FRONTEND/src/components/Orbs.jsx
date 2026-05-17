import React from 'react'

const Orbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full opacity-60" 
        style={{background:'radial-gradient(circle, rgba(99,102,241,0.22), transparent 70%)', filter:'blur(80px)'}}>
      </div>
      <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] rounded-full opacity-50" 
        style={{background:'radial-gradient(circle, rgba(59,130,246,0.2), transparent 70%)', filter:'blur(80px)'}}>
      </div>
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] rounded-full opacity-50" 
        style={{background:'radial-gradient(circle, rgba(236,72,153,0.18), transparent 70%)', filter:'blur(80px)'}}>
      </div>
    </div>
  )
}

export default Orbs
