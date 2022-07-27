import { createContext, useContext } from 'react'
import { createTheme } from '@rethemify/core'

export const ThemeContext = createContext(createTheme())

export const useTheme = () => {
  return useContext(ThemeContext)
}
