import { omitUndefinedObjectValues } from '@aliexme/js-common-utils/object/omitUndefinedObjectValues'

interface ThemePaletteBase {
  primary: string
  success: string
  info: string
  warning: string
  danger: string
}

export interface ThemePaletteCustom {}

export interface ThemePalette extends ThemePaletteCustom, Omit<ThemePaletteBase, keyof ThemePaletteCustom> {}

export interface ThemePaletteOptions extends Partial<ThemePalette> {}

export const createThemePalette = (paletteOptions: ThemePaletteOptions = {}): ThemePalette => {
  return {
    primary: '#2962FF',
    success: '#98E023',
    info: '#0FB7FF',
    warning: '#FFC30F',
    danger: '#FF5028',
    ...omitUndefinedObjectValues(paletteOptions),
  }
}
