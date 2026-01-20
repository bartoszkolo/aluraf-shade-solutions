export const animations = {
  button: 'transition-all duration-300 hover:scale-105 active:scale-95',
  menuItem: 'transition-all duration-200 hover:text-primary hover:translate-x-1',
  card: 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  parallax: 'transform-gpu transition-transform duration-700 ease-out',

  // Premium animations
  fadeInUp: 'animate-fade-in-up',
  scaleIn: 'animate-scale-in',
  shimmer: 'animate-shimmer',
  float: 'animate-float',
  pulseSubtle: 'animate-pulse-subtle',
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

  // Premium keyframes
  fadeInUp: {
    '0%': { opacity: '0', transform: 'translateY(40px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' },
  },
  scaleIn: {
    '0%': { opacity: '0', transform: 'scale(0.95)' },
    '100%': { opacity: '1', transform: 'scale(1)' },
  },
  shimmer: {
    '0%': { backgroundPosition: '-1000px 0' },
    '100%': { backgroundPosition: '1000px 0' },
  },
  float: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  },
  pulseSubtle: {
    '0%, 100%': { opacity: '1' },
    '50%': { opacity: '0.8' },
  },
}
