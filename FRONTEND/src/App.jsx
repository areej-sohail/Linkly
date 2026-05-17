import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Orbs from './components/Orbs'
import HomePage from './pages/HomePage'
import LoginForm from './components/loginForm'
import RegisterForm from './components/registerForm'
import { useUser } from './context/UserContext'
import Dashboard from './pages/Dashboard'
import AnalyticsDashboard from './pages/AnalyticsDashboard'
import MyLinks from './pages/MyLinks'

const App = () => {
  const { user } = useUser()

  return (
    <div className="relative min-h-screen bg-[#07090f]">
        <Orbs/>
        <div className="relative z-10">
          <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/"/>} />
          <Route path="/dashboard/analytics" element={user ? <AnalyticsDashboard /> : <Navigate to="/"/>} />
          <Route path="/dashboard/links" element={user ? <MyLinks /> : <Navigate to="/"/>} />
          <Route path="/auth/login" element={!user ? <LoginForm/> : <Navigate to="/dashboard"/>} />
          <Route path="/auth/register" element={!user ? <RegisterForm/> : <Navigate to="/dashboard"/>} />
          </Routes>
        </div>
      </div>
  )
}

export default App