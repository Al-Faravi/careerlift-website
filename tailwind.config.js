/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgLight: '#e8f0fe',
        bgMid: '#f0f4fd',
        bgDark: '#e0e8f8',
        primary: {
          light: '#60a5fa',
          DEFAULT: '#3b82f6',
          dark: '#1d4ed8',
        },
        secondary: {
          light: '#818cf8',
          DEFAULT: '#6366f1',
          dark: '#4338ca',
        }
      },
      boxShadow: {
        // Neo-Glass Floating Shadow
        'neo-float': '8px 8px 16px rgba(165, 175, 190, 0.35), -8px -8px 16px rgba(255, 255, 255, 0.8)',
        'neo-float-hover': '12px 12px 22px rgba(165, 175, 190, 0.45), -12px -12px 22px rgba(255, 255, 255, 0.9)',
        // Pressed Inset Shadow (For Active Buttons/Tabs)
        'neo-inset': 'inset 4px 4px 8px rgba(165, 175, 190, 0.35), inset -4px -4px 8px rgba(255, 255, 255, 0.9)',
        'neo-btn': '6px 6px 12px rgba(79, 70, 229, 0.3), -4px -4px 10px rgba(255, 255, 255, 0.8)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2))',
      }
    },
  },
  plugins: [],
}