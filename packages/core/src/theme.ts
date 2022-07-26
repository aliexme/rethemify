interface ITheme {
  name?: string
}

export interface IThemeCustom {}

export interface Theme extends IThemeCustom, Omit<ITheme, keyof IThemeCustom> {}

export const createTheme = (theme?: Partial<Theme>): Theme => {
  return {
    name: 'default',
    ...theme,
  }
}
