// 8 Beautiful Theme Configurations
// Each theme has light and dark variants

export type ThemeMode = 'light' | 'dark';

export interface Theme {
  id: string;
  name: string;
  description: string;
  colors: {
    light: {
      background: string;
      foreground: string;
      card: string;
      cardBorder: string;
      primary: string;
      secondary: string;
      accent: string;
      muted: string;
    };
    dark: {
      background: string;
      foreground: string;
      card: string;
      cardBorder: string;
      primary: string;
      secondary: string;
      accent: string;
      muted: string;
    };
  };
}

export const THEMES: Theme[] = [
  {
    id: 'midnight',
    name: 'Midnight Blue',
    description: 'Deep blue with cyan accents (Current)',
    colors: {
      light: {
        background: '#F8FAFC',
        foreground: '#0F172A',
        card: '#FFFFFF',
        cardBorder: '#E2E8F0',
        primary: '#3B82F6',
        secondary: '#06B6D4',
        accent: '#0EA5E9',
        muted: '#64748B'
      },
      dark: {
        background: '#000000',
        foreground: '#FFFFFF',
        card: '#0F0F0F',
        cardBorder: '#262626',
        primary: '#3B82F6',
        secondary: '#06B6D4',
        accent: '#0EA5E9',
        muted: '#A3A3A3'
      }
    }
  },
  {
    id: 'emerald',
    name: 'Emerald Forest',
    description: 'Fresh green with nature vibes',
    colors: {
      light: {
        background: '#F0FDF4',
        foreground: '#052E16',
        card: '#FFFFFF',
        cardBorder: '#D1FAE5',
        primary: '#10B981',
        secondary: '#34D399',
        accent: '#059669',
        muted: '#6B7280'
      },
      dark: {
        background: '#0A0F0D',
        foreground: '#ECFDF5',
        card: '#0F1B13',
        cardBorder: '#1E3A2B',
        primary: '#10B981',
        secondary: '#34D399',
        accent: '#059669',
        muted: '#9CA3AF'
      }
    }
  },
  {
    id: 'sunset',
    name: 'Sunset Orange',
    description: 'Warm orange and amber tones',
    colors: {
      light: {
        background: '#FFF7ED',
        foreground: '#431407',
        card: '#FFFFFF',
        cardBorder: '#FED7AA',
        primary: '#F97316',
        secondary: '#FB923C',
        accent: '#EA580C',
        muted: '#78716C'
      },
      dark: {
        background: '#0F0805',
        foreground: '#FFF7ED',
        card: '#1C0F08',
        cardBorder: '#3A2415',
        primary: '#F97316',
        secondary: '#FB923C',
        accent: '#EA580C',
        muted: '#A8A29E'
      }
    }
  },
  {
    id: 'lavender',
    name: 'Royal Purple',
    description: 'Elegant purple and violet',
    colors: {
      light: {
        background: '#FAF5FF',
        foreground: '#3B0764',
        card: '#FFFFFF',
        cardBorder: '#E9D5FF',
        primary: '#A855F7',
        secondary: '#C084FC',
        accent: '#9333EA',
        muted: '#6B7280'
      },
      dark: {
        background: '#0A0510',
        foreground: '#FAF5FF',
        card: '#150A1F',
        cardBorder: '#2E1A47',
        primary: '#A855F7',
        secondary: '#C084FC',
        accent: '#9333EA',
        muted: '#9CA3AF'
      }
    }
  },
  {
    id: 'crimson',
    name: 'Crimson Red',
    description: 'Bold red with power energy',
    colors: {
      light: {
        background: '#FEF2F2',
        foreground: '#450A0A',
        card: '#FFFFFF',
        cardBorder: '#FECACA',
        primary: '#EF4444',
        secondary: '#F87171',
        accent: '#DC2626',
        muted: '#737373'
      },
      dark: {
        background: '#0F0505',
        foreground: '#FEF2F2',
        card: '#1A0808',
        cardBorder: '#3D1515',
        primary: '#EF4444',
        secondary: '#F87171',
        accent: '#DC2626',
        muted: '#A3A3A3'
      }
    }
  },
  {
    id: 'ocean',
    name: 'Ocean Depths',
    description: 'Deep teal and aqua blue',
    colors: {
      light: {
        background: '#F0FDFA',
        foreground: '#042F2E',
        card: '#FFFFFF',
        cardBorder: '#CCFBF1',
        primary: '#14B8A6',
        secondary: '#2DD4BF',
        accent: '#0D9488',
        muted: '#64748B'
      },
      dark: {
        background: '#05100F',
        foreground: '#F0FDFA',
        card: '#0A1B19',
        cardBorder: '#15342F',
        primary: '#14B8A6',
        secondary: '#2DD4BF',
        accent: '#0D9488',
        muted: '#94A3B8'
      }
    }
  },
  {
    id: 'slate',
    name: 'Slate Gray',
    description: 'Professional gray monochrome',
    colors: {
      light: {
        background: '#F8FAFC',
        foreground: '#0F172A',
        card: '#FFFFFF',
        cardBorder: '#E2E8F0',
        primary: '#475569',
        secondary: '#64748B',
        accent: '#334155',
        muted: '#94A3B8'
      },
      dark: {
        background: '#020617',
        foreground: '#F8FAFC',
        card: '#0F172A',
        cardBorder: '#1E293B',
        primary: '#94A3B8',
        secondary: '#CBD5E1',
        accent: '#E2E8F0',
        muted: '#64748B'
      }
    }
  },
  {
    id: 'rose',
    name: 'Rose Gold',
    description: 'Elegant pink and rose tones',
    colors: {
      light: {
        background: '#FFF1F2',
        foreground: '#4C0519',
        card: '#FFFFFF',
        cardBorder: '#FECDD3',
        primary: '#F43F5E',
        secondary: '#FB7185',
        accent: '#E11D48',
        muted: '#71717A'
      },
      dark: {
        background: '#0F0508',
        foreground: '#FFF1F2',
        card: '#1F0A10',
        cardBorder: '#3D1520',
        primary: '#F43F5E',
        secondary: '#FB7185',
        accent: '#E11D48',
        muted: '#A1A1AA'
      }
    }
  }
];

export const getDefaultTheme = (): string => {
  // Check if we're in browser environment
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    return localStorage.getItem('theme-id') || 'midnight';
  }
  return 'midnight';
};

export const getDefaultMode = (): ThemeMode => {
  // Always return dark mode - light mode disabled
  return 'dark';
};

export const saveThemePreference = (themeId: string, mode: ThemeMode) => {
  // Only save in browser environment, always dark mode
  if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
    localStorage.setItem('theme-id', themeId);
    localStorage.setItem('theme-mode', 'dark'); // Force dark mode
  }
};

export const applyTheme = (themeId: string, mode: ThemeMode) => {
  // Only run in browser environment
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const theme = THEMES.find(t => t.id === themeId);
  if (!theme) return;

  const colors = theme.colors[mode];
  const root = document.documentElement;

  // Apply CSS variables
  root.style.setProperty('--background', colors.background);
  root.style.setProperty('--foreground', colors.foreground);
  root.style.setProperty('--card', colors.card);
  root.style.setProperty('--card-border', colors.cardBorder);
  root.style.setProperty('--primary', colors.primary);
  root.style.setProperty('--secondary', colors.secondary);
  root.style.setProperty('--accent', colors.accent);
  root.style.setProperty('--muted', colors.muted);

  // Update data attribute for CSS targeting
  root.setAttribute('data-theme', themeId);
  root.setAttribute('data-mode', mode);
  
  // Update background immediately
  document.body.style.backgroundColor = colors.background;
  document.body.style.color = colors.foreground;
};
