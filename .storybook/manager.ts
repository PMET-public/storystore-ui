const { addons } = require('@storybook/addons')
const { addParameters } = require('@storybook/react')
const { create } = require('@storybook/theming/create')

const theme = create({
    base: 'dark',
    brandTitle: 'StoryStore UI',
    brandUrl: 'https://pmet-public.github.io/storystore-ui',
    barBg: 'rgba(0, 0, 0, 0.3)',
    colorSecondary: 'rgba(255, 255, 225, 0.2)',
    inputBg: 'rgba(0, 0, 0, 0.15)',
    inputBorder: 'none',
    inputBorderRadius: 20,
})

addParameters({
    options: {
        panelPosition: 'bottom',
        sortStoriesByKind: true,
    },
    knobs: {
        escapeHTML: false,
    },
    a11y: {
        element: '#root',
        config: {},
        options: {},
        manual: true,
    },
})

addons.setConfig({
    theme,
})
