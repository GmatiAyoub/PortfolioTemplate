import { Card, DynamicItem } from '../ui/Card'
import { Button } from '../ui/Button'
import { Field, Input, Select } from '../ui/Input'

const LANG_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'Natif']

export function StepEducation({
  data,
  onAddEdu, onUpdateEdu, onRemoveEdu,
  onAddLang, onUpdateLang, onRemoveLang,
}) {
  return (
    <div className="space-y-6">
      {/* ── Formation ─────────────────────────────────────────────────── */}
      <Card title="Formation">
        {data.education.length === 0 && (
          <p className="text-sm text-gray-600 mb-4">
            Diplômes, certifications, formations…
          </p>
        )}

        {data.education.map((edu) => (
          <DynamicItem key={edu.id} onRemove={() => onRemoveEdu(edu.id)}>
            <div className="pr-8 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Field label="Diplôme / Certification">
                  <Input
                    value={edu.degree}
                    onChange={(e) => onUpdateEdu(edu.id, 'degree', e.target.value)}
                    placeholder="Master en Informatique"
                  />
                </Field>
                <Field label="École / Université">
                  <Input
                    value={edu.school}
                    onChange={(e) => onUpdateEdu(edu.id, 'school', e.target.value)}
                    placeholder="Sorbonne Université"
                  />
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Année d'obtention">
                  <Input
                    value={edu.year}
                    onChange={(e) => onUpdateEdu(edu.id, 'year', e.target.value)}
                    placeholder="2021"
                  />
                </Field>
                <Field label="Spécialisation">
                  <Input
                    value={edu.desc}
                    onChange={(e) => onUpdateEdu(edu.id, 'desc', e.target.value)}
                    placeholder="Génie logiciel, IA…"
                  />
                </Field>
              </div>
            </div>
          </DynamicItem>
        ))}

        <Button variant="add" size="md" onClick={onAddEdu} className="mt-1 py-3">
          + Ajouter une formation
        </Button>
      </Card>

      {/* ── Langues ───────────────────────────────────────────────────── */}
      <Card title="Langues">
        {data.languages.length === 0 && (
          <p className="text-sm text-gray-600 mb-4">
            Ajoutez les langues que vous maîtrisez.
          </p>
        )}

        {data.languages.map((lang) => (
          <DynamicItem key={lang.id} onRemove={() => onRemoveLang(lang.id)}>
            <div className="grid grid-cols-2 gap-3 pr-8">
              <Field label="Langue">
                <Input
                  value={lang.lang}
                  onChange={(e) => onUpdateLang(lang.id, 'lang', e.target.value)}
                  placeholder="Français"
                />
              </Field>
              <Field label="Niveau">
                <Select
                  value={lang.level}
                  onChange={(e) => onUpdateLang(lang.id, 'level', e.target.value)}
                >
                  {LANG_LEVELS.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </Select>
              </Field>
            </div>
          </DynamicItem>
        ))}

        <Button variant="add" size="md" onClick={onAddLang} className="mt-1 py-3">
          + Ajouter une langue
        </Button>
      </Card>
    </div>
  )
}