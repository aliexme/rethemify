interface ThemeSpacingBase {
  factor: number
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ThemeSpacingCustom {}

export interface ThemeSpacing extends ThemeSpacingCustom, Omit<ThemeSpacingBase, keyof ThemeSpacingCustom> {
  (value: number): number
}

export type ThemeSpacingOptions = number

export const createThemeSpacing = (spacingOptions: ThemeSpacingOptions = 4): ThemeSpacing => {
  const spacingFactor = spacingOptions

  const spacingFn = (value: number) => {
    return value * spacingFactor
  }

  spacingFn.factor = spacingFactor

  return spacingFn
}
