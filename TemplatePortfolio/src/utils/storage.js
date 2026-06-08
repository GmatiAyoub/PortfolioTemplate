const KEY = 'portfolio_v1'

/**
 * Default empty portfolio data structure.
 */
export const defaultData = () => ({
  personal: {
    firstName: '',
    lastName: '',
    title: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    website: '',
    city: '',
    country: '',
    bio: '',
    photo: '',
  },
  skills: [],
  experience: [],
  projects: [],
  education: [],
  languages: [],
  selectedTheme: 'steel',
  lastUpdated: null,
})

/**
 * Load portfolio data from localStorage.
 * Falls back to defaultData() if nothing is stored or parsing fails.
 */
export function loadData() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return defaultData()
    return { ...defaultData(), ...JSON.parse(raw) }
  } catch {
    return defaultData()
  }
}

/**
 * Persist portfolio data to localStorage.
 * Stamps `lastUpdated` with current ISO timestamp.
 */
export function saveData(data) {
  const payload = { ...data, lastUpdated: new Date().toISOString() }
  localStorage.setItem(KEY, JSON.stringify(payload))
  return payload
}

/**
 * Wipe all stored portfolio data.
 */
export function clearData() {
  localStorage.removeItem(KEY)
}