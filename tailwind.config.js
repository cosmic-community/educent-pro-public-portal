/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          gradient: {
            start: '#3B82F6',
            end: '#7C3AED',
          },
        },
        roles: {
          student: '#2563EB',
          lecturer: '#10B981',
          parent: '#F97316',
          principal: '#7C3AED',
        },
        danger: '#DC2626',
        surface: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'headline-xl': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'headline-l': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'small': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        'spacing-xs': '4px',
        'spacing-sm': '8px',
        'spacing-md': '16px',
        'spacing-lg': '24px',
        'spacing-xl': '32px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s cubic-bezier(.16,.84,.33,1)',
        'slide-up': 'slideUp 0.4s cubic-bezier(.16,.84,.33,1)',
        'hover-lift': 'hoverLift 0.2s cubic-bezier(.16,.84,.33,1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        hoverLift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
}