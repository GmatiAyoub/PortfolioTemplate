import { Card, DynamicItem } from '../ui/Card'
import { Button } from '../ui/Button'
import { Field, Input, Textarea } from '../ui/Input'

export function StepProjects({ data, onAdd, onUpdate, onRemove }) {
  return (
    <Card title="Projets">
      {data.projects.length === 0 && (
        <p className="text-sm text-gray-600 mb-4">
          Présentez vos projets personnels, open-source ou professionnels.
        </p>
      )}

      {data.projects.map((proj) => (
        <DynamicItem key={proj.id} onRemove={() => onRemove(proj.id)}>
          <div className="pr-8 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Titre">
                <Input
                  value={proj.title}
                  onChange={(e) => onUpdate(proj.id, 'title', e.target.value)}
                  placeholder="Mon super projet"
                />
              </Field>
              <Field label="Image (URL)">
                <Input
                  value={proj.image}
                  onChange={(e) => onUpdate(proj.id, 'image', e.target.value)}
                  placeholder="https://…"
                />
              </Field>
            </div>

            <Field label="Description">
              <Textarea
                value={proj.description}
                onChange={(e) => onUpdate(proj.id, 'description', e.target.value)}
                placeholder="Ce que fait ce projet, le problème qu'il résout…"
              />
            </Field>

            <Field label="Technologies (séparées par des virgules)">
              <Input
                value={proj.tech}
                onChange={(e) => onUpdate(proj.id, 'tech', e.target.value)}
                placeholder="React, Node.js, PostgreSQL, Docker"
              />
            </Field>

            <div className="grid grid-cols-2 gap-3">
              <Field label="GitHub">
                <Input
                  value={proj.github}
                  onChange={(e) => onUpdate(proj.id, 'github', e.target.value)}
                  placeholder="github.com/user/repo"
                />
              </Field>
              <Field label="Lien live">
                <Input
                  value={proj.live}
                  onChange={(e) => onUpdate(proj.id, 'live', e.target.value)}
                  placeholder="https://monprojet.com"
                />
              </Field>
            </div>
          </div>
        </DynamicItem>
      ))}

      <Button variant="add" size="md" onClick={onAdd} className="mt-1 py-3">
        + Ajouter un projet
      </Button>
    </Card>
  )
}