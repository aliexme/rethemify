export interface Theme {
  name?: string
}

export const createTheme = (theme?: Partial<Theme>): Theme => {
  return {
    name: 'default',
    ...theme,
  }
}
