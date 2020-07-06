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

const hexToHSL = (H: string, lightness?: number) => {
    // Convert hex to RGB first
    let r: any = 0,
        g: any = 0,
        b: any = 0
    if (H.length == 4) {
        r = '0x' + H[1] + H[1]
        g = '0x' + H[2] + H[2]
        b = '0x' + H[3] + H[3]
    } else if (H.length == 7) {
        r = '0x' + H[1] + H[2]
        g = '0x' + H[3] + H[4]
        b = '0x' + H[5] + H[6]
    }
    // Then to HSL
    r /= 255
    g /= 255
    b /= 255
    const cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin

    let h = 0,
        s = 0,
        l = 0

    if (delta == 0) h = 0
    else if (cmax == r) h = ((g - b) / delta) % 6
    else if (cmax == g) h = (b - r) / delta + 2
    else h = (r - g) / delta + 4

    h = Math.round(h * 60)

    if (h < 0) h += 360

    l = (cmax + cmin) / 2
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
    s = +(s * 100).toFixed(1)
    l = +(l * 100).toFixed(1)

    return 'hsl(' + h + ',' + s + '%,' + (lightness ?? l) + '%)'
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

    // Generate Gray Color
    if (colors.onSurface) {
        result.graySurface = hexToHSL(colors.onSurface, 95)
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
