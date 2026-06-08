import { Card } from '../ui/Card'
import { Field, Input, Textarea } from '../ui/Input'

export function StepPersonal({ data, onChange }) {
  const p = data.personal
  const set = (field) => (e) => onChange(field, e.target.value)

  return (
    <Card title="Informations personnelles">
      {/* Name row */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <Field label="Prénom">
          <Input value={p.firstName} onChange={set('firstName')} placeholder="Jean" />
        </Field>
        <Field label="Nom">
          <Input value={p.lastName} onChange={set('lastName')} placeholder="Dupont" />
        </Field>
      </div>

      {/* Title */}
      <Field label="Titre professionnel" className="mb-4">
        <Input
          value={p.title}
          onChange={set('title')}
          placeholder="Full Stack Developer · UI/UX Designer"
        />
      </Field>

      {/* Contact */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <Field label="Email">
          <Input type="email" value={p.email} onChange={set('email')} placeholder="jean@example.com" />
        </Field>
        <Field label="Téléphone">
          <Input value={p.phone} onChange={set('phone')} placeholder="+33 6 00 00 00 00" />
        </Field>
      </div>

      {/* Social */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <Field label="LinkedIn (URL)">
          <Input value={p.linkedin} onChange={set('linkedin')} placeholder="linkedin.com/in/jean" />
        </Field>
        <Field label="GitHub (URL)">
          <Input value={p.github} onChange={set('github')} placeholder="github.com/jean" />
        </Field>
      </div>

      {/* Website + Location */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <Field label="Site web">
          <Input value={p.website} onChange={set('website')} placeholder="jean.dev" />
        </Field>
        <Field label="Ville, Pays">
          <Input value={p.city} onChange={set('city')} placeholder="Paris, France" />
        </Field>
      </div>

      {/* Photo */}
      <Field label="Photo de profil (URL)" className="mb-4">
        <Input
          value={p.photo}
          onChange={set('photo')}
          placeholder="https://example.com/photo.jpg"
        />
        {p.photo && (
          <img
            src={p.photo}
            alt="Aperçu"
            className="mt-2 w-16 h-16 rounded-full object-cover border-2 border-indigo-500/40"
            onError={(e) => { e.target.style.display = 'none' }}
          />
        )}
      </Field>

      {/* Bio */}
      <Field label="Bio / À propos">
        <Textarea
          value={p.bio}
          onChange={set('bio')}
          placeholder="Décrivez votre parcours, vos passions, vos objectifs professionnels…"
          style={{ minHeight: 110 }}
        />
      </Field>
    </Card>
  )
}