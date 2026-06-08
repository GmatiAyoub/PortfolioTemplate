import { Card } from '../ui/Card'

const THEMES = [
  {
    id: 'steel',
    name: 'Steel Executive',
    desc: 'Corporatif Premium',
    font: "'Cormorant Garamond', serif",
    palette: ['#00264D', '#FF6D00', '#F8F9FA'],
    heroText: '#ffffff',
    bg: '#00264D',
    tag: 'serif · corporate',
  },
  {
    id: 'night',
    name: 'Night Coder',
    desc: 'Dark Tech',
    font: "'JetBrains Mono', monospace",
    palette: ['#000000', '#165EFE', '#07F957'],
    heroText: '#07F957',
    bg: '#000000',
    tag: 'mono · dark',
  },
  {
    id: 'forest',
    name: 'Forest Sage',
    desc: 'Nature & Durabilité',
    font: "'Lora', serif",
    palette: ['#455B51', '#374426', '#FFF0A4'],
    heroText: '#FFF0A4',
    bg: '#455B51',
    tag: 'organic · calm',
  },
  {
    id: 'crimson',
    name: 'Crimson Story',
    desc: 'Créatif Bold',
    font: "'Libre Baskerville', serif",
    palette: ['#7E0607', '#BB262A', '#DB8593'],
    heroText: '#FDF6F0',
    bg: '#7E0607',
    tag: 'editorial · bold',
  },
  {
    id: 'petrol',
    name: 'Petrol Horizon',
    desc: 'Sobre & Élégant',
    font: "'Space Grotesk', sans-serif",
    palette: ['#326586', '#F4E9D4', '#2C2C2C'],
    heroText: '#F4E9D4',
    bg: '#326586',
    tag: 'luxe · minimal',
  },
  {
    id: 'violet',
    name: 'Violet Mystique',
    desc: 'Créatif Moderne',
    font: "'Nunito', sans-serif",
    palette: ['#801F82', '#A866BE', '#C3ACEA'],
    heroText: '#ffffff',
    bg: 'linear-gradient(135deg, #801F82, #A866BE)',
    tag: 'gradient · modern',
  },
]

export { THEMES }

export function StepTheme({ selectedTheme, onSelect }) {
  return (
    <Card title="Choisissez votre thème">
      <p className="text-sm text-gray-500 mb-6 -mt-2">
        Chaque thème a une typographie, une palette et une mise en page unique.
        L'aperçu se met à jour instantanément.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {THEMES.map((theme) => {
          const selected = selectedTheme === theme.id
          return (
            <button
              key={theme.id}
              onClick={() => onSelect(theme.id)}
              className={[
                'relative text-left rounded-2xl overflow-hidden border-2 transition-all duration-300 cursor-pointer',
                selected
                  ? 'border-white shadow-xl shadow-white/10 scale-[1.02]'
                  : 'border-transparent hover:-translate-y-1 hover:shadow-lg',
              ].join(' ')}
            >
              {/* Hero mini-preview */}
              <div
                className="h-24 flex items-end p-4"
                style={{ background: theme.bg }}
              >
                <div>
                  <div
                    className="text-base font-bold leading-tight"
                    style={{ fontFamily: theme.font, color: theme.heroText }}
                  >
                    {theme.name}
                  </div>
                  <div
                    className="text-[11px] mt-0.5 opacity-70"
                    style={{ fontFamily: theme.font, color: theme.heroText }}
                  >
                    {theme.desc}
                  </div>
                </div>
              </div>

              {/* Palette strip */}
              <div className="flex h-2">
                {theme.palette.map((color, i) => (
                  <div key={i} className="flex-1" style={{ background: color }} />
                ))}
              </div>

              {/* Footer */}
              <div className="bg-[#0a0a0f] px-4 py-2.5 flex items-center justify-between">
                <span className="text-[11px] text-gray-500 font-mono">{theme.tag}</span>
                {selected && (
                  <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                    ✓ Sélectionné
                  </span>
                )}
              </div>
            </button>
          )
        })}
      </div>

      <div className="mt-5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 px-4 py-3 text-sm text-indigo-300">
        ✦ Changez de thème à tout moment — vos données sont préservées.
      </div>
    </Card>
  )
}