const STEPS = [
  { id: 'personal', label: 'Identité' },
  { id: 'skills', label: 'Compétences' },
  { id: 'experience', label: 'Expériences' },
  { id: 'projects', label: 'Projets' },
  { id: 'education', label: 'Formation' },
  { id: 'theme', label: 'Thème' },
]

export function Stepper({ currentStep, onStepClick }) {
  return (
    <nav className="flex items-center justify-center gap-0 py-6 flex-wrap" aria-label="Étapes">
      {STEPS.map((step, i) => {
        const done = i < currentStep
        const active = i === currentStep

        return (
          <div key={step.id} className="flex items-center">
            {/* Dot */}
            <button
              onClick={() => onStepClick(i)}
              className="relative flex flex-col items-center group"
              aria-current={active ? 'step' : undefined}
            >
              <span
                className={[
                  'w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300',
                  done
                    ? 'bg-emerald-500 text-white'
                    : active
                    ? 'bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/40'
                    : 'bg-[#13131f] text-gray-500 border border-[#1e1e30] group-hover:border-indigo-500/50',
                ].join(' ')}
              >
                {done ? '✓' : i + 1}
              </span>
              <span
                className={[
                  'mt-1.5 text-[10px] font-medium tracking-wide whitespace-nowrap',
                  active ? 'text-violet-400' : done ? 'text-emerald-500' : 'text-gray-600',
                ].join(' ')}
              >
                {step.label}
              </span>
            </button>

            {/* Connector line */}
            {i < STEPS.length - 1 && (
              <div
                className={[
                  'w-10 h-px mx-1 mb-5 transition-all duration-500',
                  done ? 'bg-emerald-500' : 'bg-[#1e1e30]',
                ].join(' ')}
              />
            )}
          </div>
        )
      })}
    </nav>
  )
}