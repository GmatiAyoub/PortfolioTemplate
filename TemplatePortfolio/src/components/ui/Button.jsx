/**
 * Button variants used throughout the builder UI.
 */
export function Button({ variant = 'primary', size = 'md', className = '', children, ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed'

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base',
  }

  const variants = {
    primary:
      'bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-[#13131f] text-[#e8e8f0] border border-[#1e1e30] hover:border-indigo-500/50 hover:bg-[#1a1a2e]',
    ghost:
      'bg-transparent text-gray-500 hover:text-[#e8e8f0] hover:bg-[#13131f]',
    danger:
      'bg-transparent text-red-400 border border-red-500/20 hover:bg-red-500/10 hover:border-red-500/40',
    add:
      'w-full border-2 border-dashed border-[#1e1e30] text-gray-500 hover:border-indigo-500/60 hover:text-indigo-400 bg-transparent rounded-xl font-semibold transition-all duration-200',
  }

  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}