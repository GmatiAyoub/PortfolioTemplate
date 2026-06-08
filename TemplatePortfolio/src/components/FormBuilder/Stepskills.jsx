import { Card, DynamicItem } from '../ui/Card'
import { Button } from '../ui/Button'
import { Field, Input } from '../ui/Input'

const LEVELS = ['Débutant', 'Intermédiaire', 'Avancé', 'Expert']

const LEVEL_COLORS = {
  Débutant: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  Intermédiaire: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Avancé: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
  Expert: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
}

export function StepSkills({ data, onAdd, onUpdate, onRemove }) {
  return (
    <Card title="Compétences">
      {data.skills.length === 0 && (
        <p className="text-sm text-gray-600 mb-4">
          Ajoutez vos compétences techniques et personnelles.
        </p>
      )}

      {data.skills.map((skill) => (
        <DynamicItem key={skill.id} onRemove={() => onRemove(skill.id)}>
          <div className="grid grid-cols-1 gap-3 pr-8">
            <Field label="Compétence">
              <Input
                value={skill.name}
                onChange={(e) => onUpdate(skill.id, 'name', e.target.value)}
                placeholder="React, Python, Figma, Management…"
              />
            </Field>
            <Field label="Niveau">
              <div className="flex gap-2 flex-wrap">
                {LEVELS.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => onUpdate(skill.id, 'level', lvl)}
                    className={[
                      'px-3 py-1 rounded-lg border text-xs font-semibold transition-all duration-200 cursor-pointer',
                      skill.level === lvl
                        ? LEVEL_COLORS[lvl]
                        : 'bg-transparent text-gray-600 border-[#1e1e30] hover:border-gray-500',
                    ].join(' ')}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </Field>
          </div>
        </DynamicItem>
      ))}

      <Button variant="add" size="md" onClick={onAdd} className="mt-1 py-3">
        + Ajouter une compétence
      </Button>
    </Card>
  )
}