import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const AttractScreen = () => {
  const navigate = useNavigate()
  const { t } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen w-full bg-gradient-to-br from-primary via-primary-hover to-accent flex flex-col items-center justify-center cursor-pointer"
      onClick={() => navigate('/language')}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1688781298681-ae1f2d470b31?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMGdhdGUlMjBkZWxoaXxlbnwwfHx8fDE3Njg0MDIxNTJ8MA&ixlib=rb-4.1.0&q=85')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      ></div>

      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative z-10 text-center px-8"
      >
        <div className="mb-8">
          <h1 className="text-7xl font-bold text-white mb-4 tracking-tight">
            {t('welcomeToSuvidha')}
          </h1>
          <p className="text-3xl text-white/90 font-medium">
            {t('smartCityCivicServices')}
          </p>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-16"
        >
          <p className="text-2xl text-white font-semibold bg-secondary px-12 py-6 rounded-full shadow-2xl">
            {t('touchToStart')}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default AttractScreen