import React from 'react'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'

const Providers = ({children}) => {
  return (
    <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
        <Toaster position='top-center' reverseOrder={true}/>
        {children}
    </ThemeProvider>
  )
}

export default Providers