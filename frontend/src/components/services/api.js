import axios from 'axios'

// API Base URL
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    if (user.id) {
      config.headers['X-User-ID'] = user.id
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - clear user data and redirect to login
      localStorage.removeItem('user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// ============================================
// AUTHENTICATION APIs
// ============================================

export const authAPI = {
  sendOTP: async (phoneNumber) => {
    try {
      const response = await api.post('/auth/send-otp', { phoneNumber })
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },

  verifyOTP: async (phoneNumber, otp) => {
    try {
      const response = await api.post('/auth/verify-otp', { phoneNumber, otp })
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },
}

// ============================================
// APPLICATIONS APIs
// ============================================

export const applicationsAPI = {
  create: async (applicationData) => {
    try {
      const response = await api.post('/applications', applicationData)
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },

  getById: async (applicationId) => {
    try {
      const response = await api.get(`/applications/${applicationId}`)
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },

  getByUser: async (userId) => {
    try {
      const response = await api.get(`/applications/user/${userId}`)
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },

  track: async (applicationNumber, phoneNumber) => {
    try {
      const response = await api.post('/applications/track', {
        applicationNumber,
        phoneNumber,
      })
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },

  updateStatus: async (applicationId, status, remarks) => {
    try {
      const response = await api.put(`/applications/${applicationId}/status`, {
        status,
        remarks,
      })
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },
}

// ============================================
// BILLS APIs
// ============================================

export const billsAPI = {
  getByConsumerNumber: async (consumerNumber, serviceType) => {
    try {
      const response = await api.get('/bills', {
        params: { consumerNumber, serviceType },
      })
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },

  getById: async (billId) => {
    try {
      const response = await api.get(`/bills/${billId}`)
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },

  getByUser: async (userId) => {
    try {
      const response = await api.get(`/bills/user/${userId}`)
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },
}

// ============================================
// PAYMENTS APIs
// ============================================

export const paymentsAPI = {
  createOrder: async (billIds, amount) => {
    try {
      const response = await api.post('/payments/create-order', {
        billIds,
        amount,
      })
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },

  verifyPayment: async (paymentData) => {
    try {
      const response = await api.post('/payments/verify', paymentData)
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },

  getHistory: async (userId) => {
    try {
      const response = await api.get(`/payments/history/${userId}`)
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },
}

// ============================================
// GRIEVANCES APIs
// ============================================

export const grievancesAPI = {
  create: async (grievanceData) => {
    try {
      const response = await api.post('/grievances', grievanceData)
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },

  getById: async (grievanceId) => {
    try {
      const response = await api.get(`/grievances/${grievanceId}`)
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },

  getByUser: async (userId) => {
    try {
      const response = await api.get(`/grievances/user/${userId}`)
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },

  updateStatus: async (grievanceId, status, remarks) => {
    try {
      const response = await api.put(`/grievances/${grievanceId}/status`, {
        status,
        remarks,
      })
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },
}

// ============================================
// SOLAR APIs
// ============================================

export const solarAPI = {
  calculateSubsidy: async (monthlyUnits, rooftopArea) => {
    try {
      const response = await api.post('/solar/calculate', {
        monthlyUnits,
        rooftopArea,
      })
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },

  checkEligibility: async (userData) => {
    try {
      const response = await api.post('/solar/eligibility', userData)
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },

  getVendors: async (district) => {
    try {
      const response = await api.get('/solar/vendors', {
        params: { district },
      })
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },

  submitApplication: async (applicationData) => {
    try {
      const response = await api.post('/solar/apply', applicationData)
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },
}

// ============================================
// DOCUMENTS APIs
// ============================================

export const documentsAPI = {
  upload: async (formData) => {
    try {
      const response = await api.post('/documents/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },

  delete: async (documentId) => {
    try {
      const response = await api.delete(`/documents/${documentId}`)
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },

  getByApplication: async (applicationId) => {
    try {
      const response = await api.get(`/documents/application/${applicationId}`)
      return response.data
    } catch (error) {
      throw error.response?.data || error
    }
  },
}

export default api