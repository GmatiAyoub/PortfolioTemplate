import { Card, DynamicItem } from '../ui/Card'
import { Button } from '../ui/Button'
import { Field, Input, Textarea } from '../ui/Input'

export function StepExperience({ data, onAdd, onUpdate, onRemove }) {
  return (
    <Card title="Expériences professionnelles">
      {data.experience.length === 0 && (
        <p className="text-sm text-gray-600 mb-4">
          Listez vos postes du plus récent au plus ancien.
        </p>
      )}

      {data.experience.map((exp) => (
        <DynamicItem key={exp.id} onRemove={() => onRemove(exp.id)}>
          <div className="pr-8 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Poste">
                <Input
                  value={exp.role}
                  onChange={(e) => onUpdate(exp.id, 'role', e.target.value)}
                  placeholder="Développeur Senior"
                />
              </Field>
              <Field label="Entreprise">
                <Input
                  value={exp.company}
                  onChange={(e) => onUpdate(exp.id, 'company', e.target.value)}
                  placeholder="Acme Corp"
                />
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="De">
                <Input
                  value={exp.from}
                  onChange={(e) => onUpdate(exp.id, 'from', e.target.value)}
                  placeholder="Jan 2022"
                />
              </Field>
              <Field label="À">
                <Input
                  value={exp.to}
                  onChange={(e) => onUpdate(exp.id, 'to', e.target.value)}
                  placeholder="Présent"
                />
              </Field>
            </div>
            <Field label="Description">
              <Textarea
                value={exp.description}
                onChange={(e) => onUpdate(exp.id, 'description', e.target.value)}
                placeholder="Missions, réalisations clés, technologies utilisées…"
              />
            </Field>
          </div>
        </DynamicItem>
      ))}

      <Button variant="add" size="md" onClick={onAdd} className="mt-1 py-3">
        + Ajouter une expérience
      </Button>
    </Card>
  )
}