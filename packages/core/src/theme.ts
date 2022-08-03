import { createThemePalette, type ThemePalette } from './palette'
import { createThemeShape, type ThemeShape } from './shape'
import { createThemeSpacing, type ThemeSpacing } from './spacing'

interface ThemeBase {
  name: string
  palette: ThemePalette
  shape: ThemeShape
  spacing: ThemeSpacing
  select<T>(specifics: Record<string, T> & { default: T }): T
  select<T>(specifics: Record<string, T>): T | undefined
}

export interface ThemeCustom {}

export interface Theme extends ThemeCustom, Omit<ThemeBase, Exclude<keyof ThemeCustom, 'select'>> {}

export interface ThemeOptions extends Partial<Theme> {}

export const createTheme = (themeOptions: ThemeOptions = {}): Theme => {
  const name = themeOptions.name ?? 'default'
  const palette = themeOptions.palette ?? createThemePalette()
  const shape = themeOptions.shape ?? createThemeShape()
  const spacing = themeOptions.spacing ?? createThemeSpacing()

  return {
    name,
    palette,
    shape,
    spacing,
    select(specifics) {
      return specifics[this.name] ?? specifics.default
    },
  }
}
