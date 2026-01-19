import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { useLanguage } from '../context/LanguageContext'
import { MOCK_CONSUMPTION_HISTORY } from '../utils/mockdata'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { TrendingUp, Zap, Droplet, Flame } from 'lucide-react'

const AllUsage = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col bg-neutral">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-primary mb-8">
            {t('allUsage')}
          </h1>

          {/* Usage Charts */}
          <div className="space-y-8">
            {/* Electricity */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Electricity Usage</h3>
                  <p className="text-gray-600">Last 6 months consumption (kWh)</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={MOCK_CONSUMPTION_HISTORY.electricity}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="units" fill="#0A3D62" name="Units (kWh)" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Water */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Droplet className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Water Usage</h3>
                  <p className="text-gray-600">Last 6 months consumption (Liters)</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={MOCK_CONSUMPTION_HISTORY.water}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="units" fill="#138808" name="Units (Liters)" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Gas */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Flame className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Gas Usage</h3>
                  <p className="text-gray-600">Last 6 months consumption (SCM)</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={MOCK_CONSUMPTION_HISTORY.gas}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="units" fill="#FF9933" name="Units (SCM)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default AllUsage