export const animations = {
  button: 'transition-all duration-300 hover:scale-105 active:scale-95',
  menuItem: 'transition-all duration-200 hover:text-primary hover:translate-x-1',
  card: 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  parallax: 'transform-gpu transition-transform duration-700 ease-out',
}

export const keyframes = {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  slideUp: {
    '0%': { transform: 'translateY(20px)', opacity: '0' },
    '100%': { transform: 'translateY(0)', opacity: '1' },
  },
} 