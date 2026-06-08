import { levelToPercent, Avatar, parseTech, formatPeriod } from './shared'

/**
 * Night Coder — Dark Tech
 * Palette: #000000 / #165EFE / #07F957
 * Font: JetBrains Mono
 */
export function NightCoder({ data }) {
  const { personal: p, skills, experience, projects, education, languages } = data
  const name = [p.firstName, p.lastName].filter(Boolean).join(' ') || 'Your Name'

  return (
    <div className="theme-night min-h-screen" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <header style={{ background: '#000', padding: '2.5rem', borderBottom: '1px solid #165EFE30' }}>
        <Avatar
          photo={p.photo} firstName={p.firstName} lastName={p.lastName}
          className="w-[70px] h-[70px] rounded mb-4 border-2 text-[#07F957] text-xl"
          style={{ borderColor: '#07F957', background: '#165EFE15' }}
        />
        <div style={{ color: '#07F957', fontSize: '1.9rem', fontWeight: 700, marginBottom: '0.25rem' }}>
          <span style={{ color: '#165EFE', opacity: 0.6 }}>{'> '}</span>{name}
        </div>
        {p.title && (
          <div style={{ color: '#165EFE', fontSize: '0.82rem', marginBottom: '0.75rem' }}>
            <span style={{ opacity: 0.5 }}>// </span>{p.title}
          </div>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.75rem', color: '#165EFE', opacity: 0.8 }}>
          {p.email && <span>{p.email}</span>}
          {p.phone && <span>{p.phone}</span>}
          {p.city && <span>{p.city}</span>}
          {p.linkedin && <a href={p.linkedin} style={{ color: '#07F957' }}>LinkedIn</a>}
          {p.github && <a href={p.github} style={{ color: '#07F957' }}>GitHub</a>}
          {p.website && <a href={p.website} style={{ color: '#07F957' }}>{p.website}</a>}
        </div>
      </header>

      {/* ── BODY ─────────────────────────────────────────────────────── */}
      <main style={{ background: '#000', padding: '2rem 2.5rem' }}>

        {p.bio && (
          <Section title="about_me">
            <p style={{ color: '#888', fontSize: '0.85rem', lineHeight: 1.85 }}>{p.bio}</p>
          </Section>
        )}

        {skills.length > 0 && (
          <Section title="skills">
            {skills.map((sk) => (
              <div key={sk.id} style={{ marginBottom: '0.6rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '3px' }}>
                  <span style={{ color: '#fff' }}>{sk.name}</span>
                  <span style={{ color: '#07F957', fontSize: '0.7rem' }}>{sk.level}</span>
                </div>
                <div className="port-skill-bar">
                  <div className="port-skill-fill" style={{ width: `${levelToPercent(sk.level)}%` }} />
                </div>
              </div>
            ))}
          </Section>
        )}

        {experience.length > 0 && (
          <Section title="experience">
            {experience.map((exp) => (
              <div key={exp.id} style={{ border: '1px solid #165EFE30', borderRadius: '4px', padding: '1rem', marginBottom: '0.75rem' }}>
                <div style={{ color: '#07F957', fontSize: '0.9rem', fontWeight: 700 }}>{exp.role || 'Role'}</div>
                <div style={{ color: '#165EFE', fontSize: '0.8rem' }}>{exp.company}</div>
                <div style={{ color: '#555', fontSize: '0.75rem' }}>{formatPeriod(exp.from, exp.to)}</div>
                {exp.description && <p style={{ color: '#888', fontSize: '0.8rem', marginTop: '0.5rem', lineHeight: 1.7 }}>{exp.description}</p>}
              </div>
            ))}
          </Section>
        )}

        {projects.length > 0 && (
          <Section title="projects">
            {projects.map((pr) => (
              <div key={pr.id} style={{ border: '1px solid #165EFE30', borderRadius: '4px', padding: '1rem', marginBottom: '0.75rem' }}>
                <div style={{ color: '#07F957', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.25rem' }}>{pr.title}</div>
                {pr.description && <p style={{ color: '#888', fontSize: '0.8rem', marginBottom: '0.5rem', lineHeight: 1.65 }}>{pr.description}</p>}
                <div>{parseTech(pr.tech).map((t) => <span key={t} style={{ display: 'inline-block', padding: '2px 8px', border: '1px solid #07F95730', color: '#07F957', borderRadius: '2px', fontSize: '0.68rem', margin: '2px' }}>{t}</span>)}</div>
                <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', display: 'flex', gap: '1rem' }}>
                  {pr.github && <a href={pr.github} style={{ color: '#165EFE' }}>⌨ repo</a>}
                  {pr.live && <a href={pr.live} style={{ color: '#165EFE' }}>🔗 live</a>}
                </div>
              </div>
            ))}
          </Section>
        )}

        {education.length > 0 && (
          <Section title="education">
            {education.map((ed) => (
              <div key={ed.id} style={{ borderLeft: '2px solid #165EFE', paddingLeft: '1rem', marginBottom: '0.75rem' }}>
                <div style={{ color: '#fff', fontSize: '0.85rem' }}>{ed.degree}</div>
                <div style={{ color: '#165EFE', fontSize: '0.78rem' }}>{ed.school}{ed.year ? ` · ${ed.year}` : ''}</div>
              </div>
            ))}
          </Section>
        )}

        {languages.length > 0 && (
          <Section title="languages">
            {languages.map((lg) => (
              <div key={lg.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: '1px solid #165EFE20', fontSize: '0.8rem' }}>
                <span style={{ color: '#fff' }}>{lg.lang}</span>
                <span style={{ color: '#07F957' }}>{lg.level}</span>
              </div>
            ))}
          </Section>
        )}
      </main>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ color: '#07F957', fontSize: '0.72rem', letterSpacing: '0.15em', marginBottom: '0.85rem' }}>
        <span style={{ color: '#165EFE' }}>// </span>{title}
      </div>
      {children}
    </div>
  )
}