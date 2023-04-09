import { type ComponentRef, type ComponentType, createContext, forwardRef, useContext } from 'react'
import { createTheme, type Theme } from '@rethemify/core'

export const ThemeContext = createContext(createTheme())

export const useTheme = () => {
  return useContext(ThemeContext)
}

export type WithThemeProps = {
  theme: Theme
}
export const withTheme = <P extends WithThemeProps>(
  WrappedComponent: ComponentType<P>,
): ComponentType<Omit<P, keyof WithThemeProps>> => {
  type WrappedComponentRef = ComponentRef<typeof WrappedComponent>

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Unknown'

  const ComponentWrapper = forwardRef<WrappedComponentRef, Omit<P, keyof WithThemeProps>>((props, ref) => {
    const theme = useTheme()

    return <WrappedComponent ref={ref} {...({ ...props, theme } as P)} />
  })

  ComponentWrapper.displayName = `WithTheme(${wrappedComponentName})`

  return ComponentWrapper as unknown as ComponentType<Omit<P, keyof WithThemeProps>>
}
