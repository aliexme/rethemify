import { createThemePalette, type ThemePalette } from './palette'

interface ThemeBase {
  name: string
  palette: ThemePalette
  select<T>(specifics: Record<string, T> & { default: T }): T
  select<T>(specifics: Record<string, T>): T | undefined
}

export interface ThemeCustom {}

export interface Theme extends ThemeCustom, Omit<ThemeBase, Exclude<keyof ThemeCustom, 'select'>> {}

export interface ThemeOptions extends Partial<Theme> {}

export const createTheme = (themeOptions?: ThemeOptions): Theme => {
  return {
    name: 'default',
    palette: createThemePalette(),
    ...themeOptions,
    select(specifics) {
      return specifics[this.name] ?? specifics.default
    },
  }
}
