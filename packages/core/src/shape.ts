interface ThemeShapeBase {
  borderRadius: number
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ThemeShapeCustom {}

export interface ThemeShape extends ThemeShapeCustom, Omit<ThemeShapeBase, keyof ThemeShapeCustom> {}

export interface ThemeShapeOptions extends Partial<ThemeShape> {}

export const createThemeShape = (shapeOptions: ThemeShapeOptions = {}) => {
  const borderRadius = shapeOptions.borderRadius ?? 4

  return {
    borderRadius,
  }
}
