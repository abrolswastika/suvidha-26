import React, { createContext, useState, useContext, useEffect } from 'react'
import { MOCK_USERS } from '../utils/mockdata'
import { generateOTP } from '../utils/helpers'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Check if user is logged in (from localStorage)
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const [otpStore, setOtpStore] = useState({})

  useEffect(() => {
    // Save user to localStorage whenever it changes
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  // Send OTP (mock implementation)
  const sendOTP = async (phoneNumber) => {
    try {
      // Check if phone number exists in mock data
      if (!MOCK_USERS[phoneNumber]) {
        throw new Error('User not found')
      }

      // For mock number, use fixed OTP
      if (phoneNumber === '6239036290') {
        const otp = '123456' // Fixed OTP for demo
        setOtpStore({ ...otpStore, [phoneNumber]: otp })
        console.log(`📱 OTP for ${phoneNumber}: ${otp}`)
        return { success: true, message: 'OTP sent successfully' }
      }

      // For admin number, no OTP needed (direct login)
      if (phoneNumber === '7889249131') {
        return { success: true, message: 'Admin login - no OTP required' }
      }

      // Generate random OTP for other numbers
      const otp = generateOTP()
      setOtpStore({ ...otpStore, [phoneNumber]: otp })
      console.log(`📱 OTP for ${phoneNumber}: ${otp}`)
      
      return { success: true, message: 'OTP sent successfully' }
    } catch (error) {
      return { success: false, message: error.message }
    }
  }

  // Verify OTP
  const verifyOTP = async (phoneNumber, otp) => {
    try {
      // Admin direct login
      if (phoneNumber === '7889249131') {
        const adminUser = MOCK_USERS[phoneNumber]
        setUser(adminUser)
        return { success: true, user: adminUser }
      }

      // Verify OTP for other users
      if (otpStore[phoneNumber] === otp) {
        const userData = MOCK_USERS[phoneNumber]
        setUser(userData)
        // Clear OTP after successful verification
        const newOtpStore = { ...otpStore }
        delete newOtpStore[phoneNumber]
        setOtpStore(newOtpStore)
        return { success: true, user: userData }
      } else {
        return { success: false, message: 'Invalid OTP' }
      }
    } catch (error) {
      return { success: false, message: error.message }
    }
  }

  // Logout
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const value = {
    user,
    sendOTP,
    verifyOTP,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}