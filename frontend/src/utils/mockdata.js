import { APPLICATION_STATUS, BILL_STATUS } from './constants'

// Mock User Data
export const MOCK_USERS = {
  '6239036290': {
    id: 'user_001',
    phone: '6239036290',
    name: 'Gokul Sharma',
    role: 'citizen',
    aadhaar: '1234 5678 9012',
    email: 'gokul.sharma@example.com',
    address: 'House No. 123, Sector 17, Chandigarh',
  },
  '7889249131': {
    id: 'admin_001',
    phone: '7889249131',
    name: 'Admin User',
    role: 'admin',
    aadhaar: '9876 5432 1098',
    email: 'admin@suvidha.gov.in',
    address: 'Municipal Corporation Office, Chandigarh',
  },
}

// Mock Consumer Accounts
export const MOCK_CONSUMER_ACCOUNTS = [
  {
    id: 'ca_elec_001',
    userId: 'user_001',
    serviceType: 'electricity',
    consumerNumber: 'ELEC123456789',
    category: 'domestic',
    sanctionedLoad: 5,
    loadUnit: 'kW',
    connectionAddress: 'House No. 123, Sector 17, Chandigarh',
    status: 'active',
  },
  {
    id: 'ca_water_001',
    userId: 'user_001',
    serviceType: 'water',
    consumerNumber: 'WAT987654321',
    category: 'domestic',
    connectionAddress: 'House No. 123, Sector 17, Chandigarh',
    status: 'active',
  },
  {
    id: 'ca_gas_001',
    userId: 'user_001',
    serviceType: 'gas',
    consumerNumber: 'GAS456789123',
    category: 'domestic',
    lpgId: 'LPG123456',
    connectionAddress: 'House No. 123, Sector 17, Chandigarh',
    status: 'active',
  },
]

// Mock Bills
export const MOCK_BILLS = [
  {
    id: 'bill_001',
    consumerAccountId: 'ca_elec_001',
    serviceType: 'electricity',
    billNumber: 'ELEC-BILL-2026-001',
    billingPeriodStart: '2026-01-01',
    billingPeriodEnd: '2026-01-31',
    unitsConsumed: 245,
    fixedCharges: 50,
    energyCharges: 1470,
    taxes: 76,
    totalAmount: 1596,
    dueDate: '2026-02-15',
    status: BILL_STATUS.UNPAID,
  },
  {
    id: 'bill_002',
    consumerAccountId: 'ca_water_001',
    serviceType: 'water',
    billNumber: 'WAT-BILL-2026-001',
    billingPeriodStart: '2026-01-01',
    billingPeriodEnd: '2026-01-31',
    unitsConsumed: 15000,
    fixedCharges: 30,
    waterCharges: 450,
    taxes: 24,
    totalAmount: 504,
    dueDate: '2026-02-15',
    status: BILL_STATUS.UNPAID,
  },
  {
    id: 'bill_003',
    consumerAccountId: 'ca_gas_001',
    serviceType: 'gas',
    billNumber: 'GAS-BILL-2026-001',
    billingPeriodStart: '2025-12-01',
    billingPeriodEnd: '2025-12-31',
    unitsConsumed: 85,
    fixedCharges: 20,
    gasCharges: 510,
    taxes: 27,
    totalAmount: 557,
    dueDate: '2026-01-10',
    status: BILL_STATUS.OVERDUE,
  },
]

// Mock Applications
export const MOCK_APPLICATIONS = [
  {
    id: 'app_001',
    applicationNumber: 'ELE-20260115-001',
    userId: 'user_001',
    serviceType: 'electricity',
    applicationType: 'new_connection',
    status: APPLICATION_STATUS.UNDER_VERIFICATION,
    statusHistory: [
      {
        status: APPLICATION_STATUS.SUBMITTED,
        timestamp: '2026-01-15T10:30:00',
        remarks: 'Application submitted successfully',
      },
      {
        status: APPLICATION_STATUS.UNDER_VERIFICATION,
        timestamp: '2026-01-16T14:20:00',
        remarks: 'Documents are being verified',
      },
    ],
    formData: {
      applicantName: 'Rajesh Kumar',
      mobileNumber: '6239036290',
      aadhaar: '1234 5678 9012',
      address: 'House No. 456, Sector 22, Chandigarh',
      propertyType: 'residential',
      loadRequirement: 3,
      phaseType: 'single',
      purpose: 'domestic',
    },
    createdAt: '2026-01-15T10:30:00',
  },
]

// Mock Grievances
export const MOCK_GRIEVANCES = [
  {
    id: 'grv_001',
    complaintId: 'GRV-ELE-2026-001234',
    userId: 'user_001',
    department: 'electricity',
    category: 'service_disruption',
    subCategory: 'power_outage',
    description: 'No power supply in Sector 17 for the last 3 hours.',
    priority: 'critical',
    status: 'in_progress',
    statusHistory: [
      {
        status: 'registered',
        timestamp: '2026-01-18T08:00:00',
        officer: 'System',
        remarks: 'Complaint registered',
      },
      {
        status: 'assigned',
        timestamp: '2026-01-18T08:15:00',
        officer: 'Electrical Engineer - Zone A',
        remarks: 'Assigned to field staff',
      },
      {
        status: 'in_progress',
        timestamp: '2026-01-18T09:00:00',
        officer: 'Field Technician',
        remarks: 'Team dispatched to location',
      },
    ],
    attachments: [],
    createdAt: '2026-01-18T08:00:00',
  },
]

// Mock Solar Vendors
export const MOCK_SOLAR_VENDORS = [
  {
    id: 'vendor_001',
    name: 'SunPower India Ltd.',
    mnreEmpanelled: true,
    rating: 4.5,
    installations: 250,
    district: 'Chandigarh',
    contactNumber: '9876543210',
    email: 'contact@sunpower.in',
    warranty: '25 years',
    panelCapacity: ['1kW', '2kW', '3kW', '5kW'],
    estimatedCost: {
      '1kw': 60000,
      '2kw': 120000,
      '3kw': 180000,
    },
  },
  {
    id: 'vendor_002',
    name: 'Green Energy Solutions',
    mnreEmpanelled: true,
    rating: 4.8,
    installations: 380,
    district: 'Chandigarh',
    contactNumber: '9123456789',
    email: 'info@greenenergy.in',
    warranty: '25 years',
    panelCapacity: ['1kW', '2kW', '3kW', '5kW', '10kW'],
    estimatedCost: {
      '1kw': 58000,
      '2kw': 115000,
      '3kw': 175000,
    },
  },
]

// Mock Payment History
export const MOCK_PAYMENT_HISTORY = [
  {
    id: 'pay_001',
    userId: 'user_001',
    billIds: ['bill_prev_001'],
    serviceType: 'electricity',
    amount: 1450,
    paymentMethod: 'upi',
    transactionId: 'TXN2026010512345',
    status: 'success',
    createdAt: '2026-01-05T15:30:00',
  },
  {
    id: 'pay_002',
    userId: 'user_001',
    billIds: ['bill_prev_002'],
    serviceType: 'water',
    amount: 480,
    paymentMethod: 'card',
    transactionId: 'TXN2026010612346',
    status: 'success',
    createdAt: '2026-01-06T11:20:00',
  },
]

// Mock Consumption History
export const MOCK_CONSUMPTION_HISTORY = {
  electricity: [
    { month: 'Aug', units: 220 },
    { month: 'Sep', units: 235 },
    { month: 'Oct', units: 210 },
    { month: 'Nov', units: 195 },
    { month: 'Dec', units: 230 },
    { month: 'Jan', units: 245 },
  ],
  water: [
    { month: 'Aug', units: 12000 },
    { month: 'Sep', units: 13500 },
    { month: 'Oct', units: 14200 },
    { month: 'Nov', units: 13800 },
    { month: 'Dec', units: 14500 },
    { month: 'Jan', units: 15000 },
  ],
  gas: [
    { month: 'Aug', units: 75 },
    { month: 'Sep', units: 80 },
    { month: 'Oct', units: 78 },
    { month: 'Nov', units: 82 },
    { month: 'Dec', units: 88 },
    { month: 'Jan', units: 85 },
  ],
}