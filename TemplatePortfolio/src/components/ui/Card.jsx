/**
 * Builder UI card — dark surface with border.
 */
export function Card({ title, children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-[#1e1e30] bg-[#0f0f1a] p-6 ${className}`}>
      {title && (
        <h2 className="mb-5 pb-4 border-b border-[#1e1e30] font-['Playfair_Display'] text-xl font-bold text-[#e8e8f0]">
          {title}
        </h2>
      )}
      {children}
    </div>
  )
}

/**
 * Collapsible dynamic item (skill, experience, project, …)
 */
export function DynamicItem({ onRemove, children }) {
  return (
    <div className="relative rounded-xl border border-[#1e1e30] bg-[#07070f] p-4 mb-3">
      <button
        onClick={onRemove}
        className="absolute top-3 right-3 w-6 h-6 rounded-md bg-red-500/10 text-red-400 border border-red-500/20
          hover:bg-red-500 hover:text-white transition-all duration-200 flex items-center justify-center text-sm leading-none"
        aria-label="Supprimer"
      >
        ×
      </button>
      {children}
    </div>
  )
}