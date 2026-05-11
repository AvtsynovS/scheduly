export const theme = {
  colors: {
    white: 'var(--text-white)',
    default: 'var(--text)',
    secondary: 'var(--text-secondary)',
    primary: 'var(--text-primary)',
    accent: 'var(--text-accent)',
    muted: 'var(--text-muted)',
    positive: 'var(--color-status-positive)',
    negative: 'var(--color-status-negative)',
    neutral: 'var(--color-status-neutral)',
    success: 'var(--color-status-success)',
    warning: 'var(--color-status-warning)',
    error: 'var(--color-status-error)',
  },

  bg: {
    white: 'var(--color-bg-white)',
    default: 'var(--color-bg-default)',
    secondary: 'var(--color-bg-secondary)',
    muted: 'var(--color-bg-muted)',
    layout: {
      body: 'var(--color-bg-body)',
      header: 'var(--color-bg-header)',
      footer: 'var(--color-bg-footer)',
      sidebar: 'var(--color-bg-sidebar)',
    },
    card: {
      default: {
        base: 'var(--color-container-bg)',
        hover: 'var(--color-container-bg-hover)',
        active: 'var(--color-container-bg-active)',
        focus: 'var(--color-container-bg-focus)',
      },
      primary: {
        base: 'var(--color-container-bg-primary)',
        hover: 'var(--color-container-bg-primary-hover)',
        active: 'var(--color-container-bg-primary-active)',
        focus: 'var(--color-container-bg-primary-focus)',
      },
    },
  },

  radius: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
  },

  fonts: {
    sans: 'var(--font-sans)',
    heading: 'var(--font-heading)',
  },

  fontSize: {
    xs: 'var(--text-xs)',
    sm: 'var(--text-sm)',
    md: 'var(--text-md)',
    lg: 'var(--text-lg)',
    xl: 'var(--text-xl)',
  },

  spaces: {
    xxs: '4px',
    xs: '8px',
    s: '12px',
    m: '16px',
    l: '20px',
    xl: '24px',
    xxl: '32px',
    xxxl: '48px',
  },

  borders: {
    default: 'var(--border-default)',
    subtle: 'var(--border-subtle)',
    strong: 'var(--border-strong)',
    focus: 'var(--border-focus)',
    layout: {
      base: 'var(--border-layout)',
    },
    card: {
      base: 'var(--border-card)',
    },
    input: {
      base: 'var(--border-input)',
    },
  },

  shadows: {
    focus: 'var(--shadow-focus)',
    layout: {
      body: 'var(--shadow-body)',
      hover: 'var(--shadow-body-hover)',
    },
    card: {
      default: {
        base: 'var(--shadow-card)',
        hover: 'var(--shadow-card-hover)',
      },
    },
    dropdown: {
      base: 'var(--shadow-dropdown)',
    },
    popover: {
      base: 'var(--shadow-popover)',
    },
    modal: {
      base: 'var(--shadow-modal)',
    },
  },
};
