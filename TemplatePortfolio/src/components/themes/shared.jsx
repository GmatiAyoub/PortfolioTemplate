/**
 * Convert skill level string → percentage for skill bars.
 */
export function levelToPercent(level) {
  return { Débutant: 25, Intermédiaire: 50, Avancé: 75, Expert: 100 }[level] ?? 50
}

/**
 * Render avatar: img if URL provided, initials circle otherwise.
 */
export function Avatar({ photo, firstName, lastName, className = '', style = {} }) {
  const initials = `${firstName?.[0] ?? ''}${lastName?.[0] ?? ''}`.toUpperCase()
  if (photo) {
    return (
      <img
        src={photo}
        alt={`${firstName} ${lastName}`}
        className={`object-cover ${className}`}
        style={style}
        onError={(e) => { e.target.style.display = 'none' }}
      />
    )
  }
  if (initials) {
    return (
      <div className={`flex items-center justify-center font-bold ${className}`} style={style}>
        {initials}
      </div>
    )
  }
  return null
}

/**
 * Split a comma-separated tech string into an array of trimmed tags.
 */
export function parseTech(tech = '') {
  return tech.split(',').map((t) => t.trim()).filter(Boolean)
}

/**
 * Format period: "Jan 2022 → Présent"
 */
export function formatPeriod(from, to) {
  if (from && to) return `${from} → ${to}`
  return from || to || ''
}