import { useState, useCallback } from 'react'
import { loadData, saveData, clearData, defaultData } from '../utils/storage'

/**
 * Central hook for all portfolio state.
 * Wraps every mutation with an auto-save to localStorage.
 *
 * Usage:
 *   const { data, updatePersonal, addSkill, ... } = usePortfolio()
 */
export function usePortfolio() {
  const [data, setData] = useState(() => loadData())

  // ── Internal helper: merge & persist ──────────────────────────────────────
  const commit = useCallback((updater) => {
    setData(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater
      return saveData(next)
    })
  }, [])

  // ── Personal info ─────────────────────────────────────────────────────────
  const updatePersonal = useCallback((field, value) => {
    commit(prev => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }))
  }, [commit])

  // ── Skills ────────────────────────────────────────────────────────────────
  const addSkill = useCallback(() => {
    commit(prev => ({
      ...prev,
      skills: [...prev.skills, { id: uid(), name: '', level: 'Intermédiaire' }],
    }))
  }, [commit])

  const updateSkill = useCallback((id, field, value) => {
    commit(prev => ({
      ...prev,
      skills: prev.skills.map(s => s.id === id ? { ...s, [field]: value } : s),
    }))
  }, [commit])

  const removeSkill = useCallback((id) => {
    commit(prev => ({ ...prev, skills: prev.skills.filter(s => s.id !== id) }))
  }, [commit])

  // ── Experience ────────────────────────────────────────────────────────────
  const addExperience = useCallback(() => {
    commit(prev => ({
      ...prev,
      experience: [...prev.experience, { id: uid(), role: '', company: '', from: '', to: '', description: '' }],
    }))
  }, [commit])

  const updateExperience = useCallback((id, field, value) => {
    commit(prev => ({
      ...prev,
      experience: prev.experience.map(e => e.id === id ? { ...e, [field]: value } : e),
    }))
  }, [commit])

  const removeExperience = useCallback((id) => {
    commit(prev => ({ ...prev, experience: prev.experience.filter(e => e.id !== id) }))
  }, [commit])

  // ── Projects ──────────────────────────────────────────────────────────────
  const addProject = useCallback(() => {
    commit(prev => ({
      ...prev,
      projects: [...prev.projects, { id: uid(), title: '', description: '', tech: '', github: '', live: '', image: '' }],
    }))
  }, [commit])

  const updateProject = useCallback((id, field, value) => {
    commit(prev => ({
      ...prev,
      projects: prev.projects.map(p => p.id === id ? { ...p, [field]: value } : p),
    }))
  }, [commit])

  const removeProject = useCallback((id) => {
    commit(prev => ({ ...prev, projects: prev.projects.filter(p => p.id !== id) }))
  }, [commit])

  // ── Education ─────────────────────────────────────────────────────────────
  const addEducation = useCallback(() => {
    commit(prev => ({
      ...prev,
      education: [...prev.education, { id: uid(), degree: '', school: '', year: '', desc: '' }],
    }))
  }, [commit])

  const updateEducation = useCallback((id, field, value) => {
    commit(prev => ({
      ...prev,
      education: prev.education.map(e => e.id === id ? { ...e, [field]: value } : e),
    }))
  }, [commit])

  const removeEducation = useCallback((id) => {
    commit(prev => ({ ...prev, education: prev.education.filter(e => e.id !== id) }))
  }, [commit])

  // ── Languages ─────────────────────────────────────────────────────────────
  const addLanguage = useCallback(() => {
    commit(prev => ({
      ...prev,
      languages: [...prev.languages, { id: uid(), lang: '', level: 'B2' }],
    }))
  }, [commit])

  const updateLanguage = useCallback((id, field, value) => {
    commit(prev => ({
      ...prev,
      languages: prev.languages.map(l => l.id === id ? { ...l, [field]: value } : l),
    }))
  }, [commit])

  const removeLanguage = useCallback((id) => {
    commit(prev => ({ ...prev, languages: prev.languages.filter(l => l.id !== id) }))
  }, [commit])

  // ── Theme ─────────────────────────────────────────────────────────────────
  const setTheme = useCallback((themeId) => {
    commit(prev => ({ ...prev, selectedTheme: themeId }))
  }, [commit])

  // ── Reset ─────────────────────────────────────────────────────────────────
  const reset = useCallback(() => {
    clearData()
    setData(defaultData())
  }, [])

  return {
    data,
    // personal
    updatePersonal,
    // skills
    addSkill, updateSkill, removeSkill,
    // experience
    addExperience, updateExperience, removeExperience,
    // projects
    addProject, updateProject, removeProject,
    // education
    addEducation, updateEducation, removeEducation,
    // languages
    addLanguage, updateLanguage, removeLanguage,
    // theme
    setTheme,
    // reset
    reset,
  }
}

// ── Tiny unique-ID helper ──────────────────────────────────────────────────
function uid() {
  return Math.random().toString(36).slice(2, 9)
}