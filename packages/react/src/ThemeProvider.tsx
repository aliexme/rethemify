import React, { useMemo } from 'react'
import { type Theme } from '@rethemify/core'

import { ThemeContext, useTheme } from './context'

export type ThemeProviderProps = React.PropsWithChildren<{
  theme?: Theme | ((parentTheme: Theme) => Theme)
}>

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { theme: propTheme, children } = props

  const parentTheme = useTheme()

  const theme = useMemo(() => {
    if (typeof propTheme === 'function') return propTheme(parentTheme)
    return propTheme || parentTheme
  }, [propTheme, parentTheme])

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}
