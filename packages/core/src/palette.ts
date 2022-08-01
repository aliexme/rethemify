interface ThemePaletteBase {
  primary: string
  success: string
  info: string
  warning: string
  danger: string

  textPrimary: string
  textSecondary: string
  textContrast: string
  textDisabled: string
  textPlaceholder: string
  textLink: string

  backgroundPrimary: string
  backgroundSecondary: string

  divider: string
}

export interface ThemePaletteCustom {}

export interface ThemePalette extends ThemePaletteCustom, Omit<ThemePaletteBase, keyof ThemePaletteCustom> {}

export interface ThemePaletteOptions extends Partial<ThemePalette> {}

export const createThemePalette = (paletteOptions: ThemePaletteOptions = {}): ThemePalette => {
  const primaryColor = paletteOptions.primary ?? '#2962FF'
  const successColor = paletteOptions.success ?? '#98E023'
  const infoColor = paletteOptions.info ?? '#0FB7FF'
  const warningColor = paletteOptions?.warning ?? '#FFC30F'
  const dangerColor = paletteOptions?.danger ?? '#FF5028'

  const textPrimaryColor = paletteOptions.textPrimary ?? '#212121'
  const textSecondaryColor = paletteOptions.textSecondary ?? '#666666'
  const textContrastColor = paletteOptions.textContrast ?? '#FFFFFF'
  const textDisabledColor = paletteOptions.textDisabled ?? '#9E9E9E'
  const textPlaceholderColor = paletteOptions.textPlaceholder ?? '#888888'
  const textLinkColor = paletteOptions.textLink ?? '#0D6EFD'

  const backgroundPrimaryColor = paletteOptions.backgroundPrimary ?? '#EEEEEE'
  const backgroundSecondaryColor = paletteOptions.backgroundSecondary ?? '#FFFFFF'

  const dividerColor = paletteOptions.divider ?? '#E0E0E0'

  return {
    primary: primaryColor,
    success: successColor,
    info: infoColor,
    warning: warningColor,
    danger: dangerColor,

    textPrimary: textPrimaryColor,
    textSecondary: textSecondaryColor,
    textContrast: textContrastColor,
    textDisabled: textDisabledColor,
    textPlaceholder: textPlaceholderColor,
    textLink: textLinkColor,

    backgroundPrimary: backgroundPrimaryColor,
    backgroundSecondary: backgroundSecondaryColor,

    divider: dividerColor,
  }
}
