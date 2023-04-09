import { useMemo } from 'react'
import { StyleSheet } from 'react-native'
import { type Theme } from '@rethemify/core'
import { useTheme } from '@rethemify/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useThemeStyles = <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>>(
  styles: T | StyleSheet.NamedStyles<T> | ((theme: Theme) => T | StyleSheet.NamedStyles<T>),
) => {
  const theme = useTheme()

  const computedStyles = useMemo(() => {
    return typeof styles === 'function' ? styles(theme) : styles
  }, [theme, styles])

  const styleSheet = useMemo(() => {
    return StyleSheet.create(computedStyles)
  }, [computedStyles])

  return styleSheet
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const makeThemeStyles = <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>>(
  styles: T | StyleSheet.NamedStyles<T> | ((theme: Theme) => T | StyleSheet.NamedStyles<T>),
) => {
  return () => {
    return useThemeStyles(styles)
  }
}
