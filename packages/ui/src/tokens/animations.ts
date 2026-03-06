export const saKeyframes = {
  shimmer: {
    '0%': { backgroundPosition: '-200% 0' },
    '100%': { backgroundPosition: '200% 0' },
  },
} as const

export const saAnimations = {
  shimmer: 'shimmer 3s infinite',
} as const
