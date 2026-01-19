import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

// Pages
import AttractScreen from './pages/AttractScreen'
import LanguageSelection from './pages/LanguageSelection'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

// Service Pages
import ElectricityHub from './components/services/electricity/ElectricityHub'
import WaterHub from './components/services/water/WaterHub'
import GasHub from './components/services/gas/GasHub'
import SanitationHub from './components/services/sanitation/SanitationHub'
import SolarHub from './components/services/solar/SolarHub'

// Billing & Payments
import AllBills from './pages/AllBills'
import AllUsage from './pages/AllUsage'

function App() {
  const { user } = useAuth()

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<AttractScreen />} />
        <Route path="/language" element={<LanguageSelection />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route 
          path="/dashboard" 
          element={user ? <Dashboard /> : <Navigate to="/login" />} 
        />
        
        {/* Service Routes */}
        <Route 
          path="/electricity" 
          element={user ? <ElectricityHub /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/water" 
          element={user ? <WaterHub /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/gas" 
          element={user ? <GasHub /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/sanitation" 
          element={user ? <SanitationHub /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/solar" 
          element={user ? <SolarHub /> : <Navigate to="/login" />} 
        />

        {/* Billing Routes */}
        <Route 
          path="/all-bills" 
          element={user ? <AllBills /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/all-usage" 
          element={user ? <AllUsage /> : <Navigate to="/login" />} 
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App