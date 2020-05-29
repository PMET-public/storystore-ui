/**
 *  https://gist.github.com/danieliser/b4b24c9f772066bcf0a6
 */

const hexToRGBA = (hex: string, alpha = 1) => {
    const tempHex = hex.substr(1)
    const r = parseInt(tempHex.substring(0, 2), 16)
    const g = parseInt(tempHex.substring(2, 4), 16)
    const b = parseInt(tempHex.substring(4, 6), 16)

    return `rgba(${r},${g},${b},${alpha / 100})`
}

export const generateColorTheme = (colors: { [key: string]: string }) => {
    const result: { [key: string]: string } = {}

    for (const color in colors) {
        const value = colors[color]
        result[color] = value // 100%

        for (let i = 5; i < 100; i = i + 5) {
            result[color + i] = hexToRGBA(value, i) // 5 - 95 %s
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
}

export type ThemeColors = typeof defaultColors
