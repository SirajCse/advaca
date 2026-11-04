const colors = {
    'site-primary': 'var(--color-site-primary)',
    'site-light-primary': 'var(--color-site-light-primary)',
    'dark-header': 'var(--color-dark-header)',
    'dark-body': 'var(--color-dark-body)',
    primary: {
        DEFAULT: 'var(--color-primary)',
        dark: 'var(--color-dark-primary)',
        darken: 'var(--color-darken-primary)',
        light: 'var(--color-light-primary)',
        lighten: 'var(--color-lighten-primary)',
    },
    secondary: {
        DEFAULT: 'var(--color-secondary)',
        dark: 'var(--color-dark-secondary)',
        darken: 'var(--color-darken-secondary)',
        light: 'var(--color-light-secondary)',
        lighten: 'var(--color-lighten-secondary)',
    },
    success: {
        DEFAULT: 'var(--color-success)',
        label: 'var(--color-success-label)',
        dark: 'var(--color-dark-success)',
        light: 'var(--color-light-success)',
    },
    info: {
        DEFAULT: 'var(--color-info)',
        label: 'var(--color-info-label)',
        dark: 'var(--color-dark-info)',
        light: 'var(--color-light-info)',
    },
    warning: {
        DEFAULT: 'var(--color-warning)',
        label: 'var(--color-warning-label)',
        dark: 'var(--color-dark-warning)',
        light: 'var(--color-light-warning)',
    },
    danger: {
        DEFAULT: 'var(--color-danger)',
        label: 'var(--color-danger-label)',
        dark: 'var(--color-dark-danger)',
        light: 'var(--color-light-danger)',
    },
    'text-label': 'var(--color-text-label)',
};

export default {
    content: ['./resources/views/**/*.blade.php', './resources/js/**/*.{vue,js}'],
    darkMode: 'class',
    theme: {
        extend: { colors },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
