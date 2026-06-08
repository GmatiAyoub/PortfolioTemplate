import { levelToPercent, Avatar, parseTech, formatPeriod } from './shared'

/**
 * Steel Executive — Corporatif Premium
 * Palette: #00264D / #FF6D00 / #F8F9FA
 * Font: Cormorant Garamond (serif)
 */
export function SteelExecutive({ data }) {
  const { personal: p, skills, experience, projects, education, languages } = data
  const name = [p.firstName, p.lastName].filter(Boolean).join(' ') || 'Votre Nom'

  return (
    <div className="theme-steel min-h-screen">
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <header style={{ background: '#00264D', color: '#fff', padding: '2.5rem', borderBottom: '5px solid #FF6D00' }}>
        <Avatar
          photo={p.photo} firstName={p.firstName} lastName={p.lastName}
          className="w-20 h-20 rounded-full border-[3px] mb-4"
          style={{ borderColor: '#FF6D00' }}
        />
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.4rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>
          {name}
        </h1>
        {p.title && (
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.65, marginBottom: '0.75rem' }}>
            {p.title}
          </p>
        )}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.78rem', fontFamily: "'DM Sans', sans-serif", opacity: 0.8 }}>
          {p.email && <span>✉ {p.email}</span>}
          {p.phone && <span>☎ {p.phone}</span>}
          {p.city && <span>📍 {p.city}</span>}
          {p.linkedin && <a href={p.linkedin} style={{ color: '#fff' }}>LinkedIn</a>}
          {p.github && <a href={p.github} style={{ color: '#fff' }}>GitHub</a>}
          {p.website && <a href={p.website} style={{ color: '#fff' }}>{p.website}</a>}
        </div>
      </header>

      {/* ── BODY ─────────────────────────────────────────────────────── */}
      <main style={{ padding: '2rem 2.5rem', background: '#F8F9FA' }}>

        {/* Bio */}
        {p.bio && (
          <Section title="À propos">
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', lineHeight: 1.85, color: '#1A1A2E', opacity: 0.85 }}>
              {p.bio}
            </p>
          </Section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <Section title="Compétences">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 2rem' }}>
              {skills.map((sk) => (
                <div key={sk.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '3px' }}>
                    <span style={{ fontWeight: 600 }}>{sk.name}</span>
                    <span style={{ fontSize: '0.72rem', color: '#FF6D00', fontFamily: "'DM Sans', sans-serif" }}>{sk.level}</span>
                  </div>
                  <div className="port-skill-bar">
                    <div className="port-skill-fill" style={{ width: `${levelToPercent(sk.level)}%`, background: '#FF6D00' }} />
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <Section title="Expériences">
            {experience.map((exp) => (
              <div key={exp.id} style={{ borderLeft: '3px solid #FF6D00', paddingLeft: '1rem', marginBottom: '1.25rem', background: '#fff', borderRadius: '0 8px 8px 0', padding: '1rem' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 700, color: '#00264D' }}>{exp.role || 'Poste'}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', color: '#FF6D00', fontWeight: 600 }}>{exp.company}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', color: '#888', marginTop: '2px' }}>{formatPeriod(exp.from, exp.to)}</div>
                {exp.description && <p style={{ fontSize: '0.88rem', color: '#555', marginTop: '0.5rem', lineHeight: 1.7 }}>{exp.description}</p>}
              </div>
            ))}
          </Section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <Section title="Projets">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {projects.map((pr) => (
                <div key={pr.id} style={{ background: '#fff', border: '1px solid #00264D15', borderRadius: '8px', padding: '1rem' }}>
                  {pr.image && <img src={pr.image} alt={pr.title} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '4px', marginBottom: '0.75rem' }} onError={(e) => { e.target.style.display = 'none' }} />}
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, color: '#00264D', marginBottom: '0.25rem' }}>{pr.title}</div>
                  {pr.description && <p style={{ fontSize: '0.82rem', color: '#555', marginBottom: '0.5rem', lineHeight: 1.6 }}>{pr.description}</p>}
                  <div>{parseTech(pr.tech).map((t) => <span key={t} style={{ display: 'inline-block', padding: '2px 8px', background: '#00264D', color: '#fff', borderRadius: '4px', fontSize: '0.68rem', fontFamily: "'DM Sans', sans-serif", margin: '2px' }}>{t}</span>)}</div>
                  <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', display: 'flex', gap: '1rem' }}>
                    {pr.github && <a href={pr.github} style={{ color: '#FF6D00' }}>⌨ Code</a>}
                    {pr.live && <a href={pr.live} style={{ color: '#FF6D00' }}>🔗 Demo</a>}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <Section title="Formation">
            {education.map((ed) => (
              <div key={ed.id} style={{ background: '#fff', borderRadius: '8px', padding: '0.85rem 1rem', marginBottom: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontWeight: 700, color: '#00264D' }}>{ed.degree}</div>
                  <div style={{ fontSize: '0.85rem', color: '#666', fontFamily: "'DM Sans', sans-serif" }}>{ed.school}{ed.desc ? ` · ${ed.desc}` : ''}</div>
                </div>
                {ed.year && <div style={{ fontSize: '0.8rem', color: '#FF6D00', fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>{ed.year}</div>}
              </div>
            ))}
          </Section>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <Section title="Langues">
            {languages.map((lg) => (
              <div key={lg.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid #00264D10', fontFamily: "'DM Sans', sans-serif" }}>
                <span style={{ fontSize: '0.9rem' }}>{lg.lang}</span>
                <span style={{ fontSize: '0.75rem', color: '#FF6D00', fontWeight: 700 }}>{lg.level}</span>
              </div>
            ))}
          </Section>
        )}

        <Empty data={data} />
      </main>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#FF6D00', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, marginBottom: '0.85rem', paddingBottom: '0.5rem', borderBottom: '1px solid #00264D20' }}>
        {title}
      </div>
      {children}
    </div>
  )
}

function Empty({ data }) {
  const { personal: p, skills, experience } = data
  if (p.bio || skills.length || experience.length) return null
  return (
    <div style={{ textAlign: 'center', padding: '3rem', color: '#aaa', fontSize: '0.9rem' }}>
      Remplissez le formulaire pour voir votre portfolio ici ✦
    </div>
  )
}