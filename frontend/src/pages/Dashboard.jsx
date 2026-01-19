import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useLanguage } from '../context/LanguageContext'
import { motion } from 'framer-motion'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ServiceCard from '../components/common/ServiceCard'
import { 
  Zap, 
  Droplet, 
  Flame, 
  Trash2, 
  Sun, 
  FileText, 
  CreditCard, 
  MessageSquare,
  User,
  Bell,
  History,
  FolderOpen
} from 'lucide-react'

const Dashboard = () => {
  const navigate = useNavigate()
  const { user, isAdmin } = useAuth()
  const { t } = useLanguage()

  const services = [
    {
      title: t('electricity'),
      icon: Zap,
      description: 'Manage electricity connections, bills & payments',
      path: '/electricity',
      isSpecial: false,
    },
    {
      title: t('water'),
      icon: Droplet,
      description: 'Water connections, quality tests & billing',
      path: '/water',
      isSpecial: false,
    },
    {
      title: t('gas'),
      icon: Flame,
      description: 'LPG refills, new connections & payments',
      path: '/gas',
      isSpecial: false,
    },
    {
      title: t('sanitation'),
      icon: Trash2,
      description: 'Waste management & sanitation services',
      path: '/sanitation',
      isSpecial: false,
    },
    {
      title: t('solar'),
      icon: Sun,
      description: 'PM Surya Ghar - Solar rooftop subsidy',
      path: '/solar',
      isSpecial: true, // X-Factor!
    },
  ]

  const quickActions = [
    {
      title: t('allBills'),
      icon: FileText,
      path: '/all-bills',
    },
    {
      title: t('allUsage'),
      icon: History,
      path: '/all-usage',
    },
    {
      title: t('myGrievances'),
      icon: MessageSquare,
      path: '/grievances',
    },
    {
      title: t('documentCenter'),
      icon: FolderOpen,
      path: '/documents',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-neutral">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary to-primary-hover text-white rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Welcome, {user?.name}! 👋
              </h1>
              <p className="text-white/80 text-lg">
                {isAdmin ? 'Admin Dashboard' : 'Your one-stop solution for all civic services'}
              </p>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                <User className="w-16 h-16" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(action.path)}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <action.icon className="w-8 h-8 text-primary mb-3 mx-auto" />
                <p className="font-semibold text-gray-800 text-sm">{action.title}</p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Services */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <ServiceCard
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                  onClick={() => navigate(service.path)}
                  isSpecial={service.isSpecial}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Notifications Panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-white rounded-xl shadow-md p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-gray-800">Recent Notifications</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="font-semibold text-gray-800">Your electricity bill is ready</p>
                <p className="text-sm text-gray-600">Bill amount: ₹1,596 | Due: Feb 15, 2026</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <p className="font-semibold text-gray-800">Water bill overdue</p>
<p className="text-sm text-gray-600">Please pay ₹504 to avoid late fees</p>
</div>
</div>
</div>
</motion.div>
</main>
  <Footer />
</div>
)
}
export default Dashboard

