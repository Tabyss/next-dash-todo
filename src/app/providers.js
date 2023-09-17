'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

export function Providers({children}) {
    const theme = extendTheme({
        colors: {
          brand: {
            100: "#D3F4F1",
            300: "#A7E8E2",
            500: "#4FD1C5",
            700: "#3A7178",
            900: "#2D3748",
          },
        },
      })
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}