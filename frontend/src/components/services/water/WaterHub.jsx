import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { useLanguage } from '../../../context/LanguageContext'
import { 
  Plus, 
  Trash2, 
  CreditCard, 
  TestTube,
  Droplet 
} from 'lucide-react'

const WaterHub = () => {
  const navigate = useNavigate()
  const { t } = useLanguage()

  const services = [
    {
      title: 'New Water Connection',
      description: 'Apply for new water & sewer connection',
      icon: Plus,
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
      path: '/water/new-connection',
    },
    {
      title: 'Water Quality Test',
      description: 'Book water quality testing service',
      icon: TestTube,
      color: 'bg-green-100',
      iconColor: 'text-green-600',
      path: '/water/quality-test',
    },
    {
      title: 'Remove Connection',
      description: 'Disconnect water connection',
      icon: Trash2,
      color: 'bg-red-100',
      iconColor: 'text-red-600',
      path: '/water/remove-connection',
    },
    {
      title: t('billPayment'),
      description: 'View and pay water bills',
      icon: CreditCard,
      color: 'bg-purple-100',
      iconColor: 'text-purple-600',
      path: '/water/billing',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-neutral">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Droplet className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{t('water')}</h1>
              <p className="text-white/90 text-lg">Water & Sewer Services</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(service.path)}
              className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-xl transition-all"
            >
              <div className={`w-14 h-14 ${service.color} rounded-full flex items-center justify-center mb-4`}>
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6"
        >
          <h3 className="text-lg font-bold text-blue-900 mb-2">Water Quality Standards</h3>
          <p className="text-blue-800">
            All water supplied meets BIS 10500:2012 standards for safe drinking water.
            Book a free quality test if you notice any issues.
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default WaterHub