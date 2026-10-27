/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#FDF9F1',
          dim: '#DDDAD2',
          bright: '#FDF9F1',
          container: {
            lowest: '#FFFFFF',
            low: '#F7F3EB',
            DEFAULT: '#F1EDE6',
            high: '#ECE8E0',
            highest: '#E6E2DB',
          },
          variant: '#E6E2DB',
          tint: '#5F5E5D',
        },
        'on-surface': {
          DEFAULT: '#1C1C17',
          variant: '#464742',
        },
        'inverse-surface': '#31302B',
        'inverse-on-surface': '#F4F0E9',
        outline: {
          DEFAULT: '#767872',
          variant: '#C7C7C0',
        },
        primary: {
          DEFAULT: '#000000',
          container: '#1C1C1A',
          fixed: '#E5E2E0',
          'fixed-dim': '#C9C6C4',
        },
        'on-primary': {
          DEFAULT: '#FFFFFF',
          container: '#858382',
          fixed: '#1C1C1A',
          'fixed-variant': '#474745',
        },
        'inverse-primary': '#C9C6C4',
        secondary: {
          DEFAULT: '#396660',
          container: '#B9E9E1',
          fixed: '#BCECE4',
          'fixed-dim': '#A0D0C8',
        },
        'on-secondary': {
          DEFAULT: '#FFFFFF',
          container: '#3D6B64',
          fixed: '#00201D',
          'fixed-variant': '#1F4E48',
        },
        tertiary: {
          DEFAULT: '#000000',
          container: '#2F1500',
          fixed: '#FFDCC3',
          'fixed-dim': '#FFB77D',
        },
        'on-tertiary': {
          DEFAULT: '#FFFFFF',
          container: '#C76C00',
          fixed: '#2F1500',
          'fixed-variant': '#6E3900',
        },
        error: {
          DEFAULT: '#BA1A1A',
          container: '#FFDAD6',
        },
        'on-error': {
          DEFAULT: '#FFFFFF',
          container: '#93000A',
        },
        background: '#FDF9F1',
        'on-background': '#1C1C17',
        canvas: '#F7F5F0',
        charcoal: '#141413',
        slate: '#706E68',
        ochre: '#D97706',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
      },
      spacing: {
        gutter: '1rem',
        'gutter-mobile': '0.75rem',
        'margin-custom': '1.5rem',
        'margin-mobile': '1.25rem',
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.25rem',
      },
      boxShadow: {
        sheet: '0 12px 32px -4px rgba(20, 20, 19, 0.06)',
      },
    },
  },
  plugins: [],
}