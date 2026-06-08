/**
 * Reusable form field wrapper.
 * Renders a label + any input/textarea/select child.
 */
export function Field({ label, children, className = '' }) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-[11px] font-semibold tracking-widest uppercase text-gray-500">
          {label}
        </label>
      )}
      {children}
    </div>
  )
}

const base =
  'w-full rounded-xl border border-[#1e1e30] bg-[#07070f] px-3.5 py-2.5 text-sm text-[#e8e8f0] ' +
  'placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-2 ' +
  'focus:ring-indigo-500/20 transition-all duration-200'

export function Input({ className = '', ...props }) {
  return <input className={`${base} ${className}`} {...props} />
}

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`${base} resize-y min-h-[90px] ${className}`}
      {...props}
    />
  )
}

export function Select({ children, className = '', ...props }) {
  return (
    <select className={`${base} cursor-pointer ${className}`} {...props}>
      {children}
    </select>
  )
}