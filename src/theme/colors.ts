/**
 *  https://css-tricks.com/converting-color-spaces-in-javascript/
 */

const hexToRGBA = (h: string, alpha = 1) => {
    let r = '0',
        g = '0',
        b = '0'

    // 3 digits
    if (h.length == 4) {
        r = '0x' + h[1] + h[1]
        g = '0x' + h[2] + h[2]
        b = '0x' + h[3] + h[3]

        // 6 digits
    } else if (h.length == 7) {
        r = '0x' + h[1] + h[2]
        g = '0x' + h[3] + h[4]
        b = '0x' + h[5] + h[6]
    }

    return 'rgb(' + +r + ',' + +g + ',' + +b + ',' + alpha / 100 + ')'
}

export const generateColorTheme = (colors: { [key: string]: string }) => {
    const result: { [key: string]: string } = {}

    // Generate all the opacity level 5 - 95%
    for (const color in colors) {
        const value = colors[color]

        result[color] = value // 100%

        for (let i = 5; i < 100; i = i + 5) {
            result[color + i] = hexToRGBA(value, i)
        }
    }

    return result
}

export const defaultColors = {
    ...generateColorTheme({
        surface: '#ffffff',
        onSurface: '#222222',

        primary: '#222222',
        onPrimary: '#ffffff',

        secondary: '#ffffff',
        onSecondary: '#222222',

        accent: '#a14a24',
        onAccent: '#ffffff',

        error: '#ef5350',
        onError: '#ffffff',

        warning: '#f57c00',
        onWarning: '#ffffff',

        notice: '#0070f3',
        onNotice: '#ffffff',

        success: '#008b8b',
        onSuccess: '#ffffff',
    }),

    graySurface: '#f3f3f3',
}

export type ThemeColors = typeof defaultColors
