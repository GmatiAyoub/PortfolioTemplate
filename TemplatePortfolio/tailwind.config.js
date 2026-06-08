/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Steel Executive
        'steel-primary': '#00264D',
        'steel-accent': '#FF6D00',
        'steel-bg': '#F8F9FA',
        'steel-text': '#1A1A2E',

        // Night Coder
        'night-primary': '#165EFE',
        'night-accent': '#07F957',
        'night-bg': '#000000',
        'night-text': '#FFFFFF',

        // Forest Sage
        'forest-primary': '#455B51',
        'forest-secondary': '#374426',
        'forest-accent': '#FFF0A4',
        'forest-bg': '#F5F0E8',

        // Crimson Story
        'crimson-primary': '#7E0607',
        'crimson-accent': '#BB262A',
        'crimson-highlight': '#DB8593',
        'crimson-bg': '#FDF6F0',

        // Petrol Horizon
        'petrol-primary': '#326586',
        'petrol-accent': '#2C2C2C',
        'petrol-bg': '#F4E9D4',

        // Violet Mystique
        'violet-primary': '#801F82',
        'violet-secondary': '#A866BE',
        'violet-accent': '#C3ACEA',
        'violet-bg': '#F9F5FF',
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
