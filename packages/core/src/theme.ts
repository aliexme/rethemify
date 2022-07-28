import { createThemePalette, type ThemePalette } from './palette'

interface ThemeBase {
  name?: string
  palette: ThemePalette
}

export interface ThemeCustom {}

export interface Theme extends ThemeCustom, Omit<ThemeBase, keyof ThemeCustom> {}

export interface ThemeOptions extends Partial<Theme> {}

export const createTheme = (themeOptions?: ThemeOptions): Theme => {
  return {
    name: 'default',
    palette: createThemePalette(),
    ...themeOptions,
  }
}
