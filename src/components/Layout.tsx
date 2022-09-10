import { BoxProps, Box } from '@mantine/core'
import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'

interface LayoutProps extends BoxProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children, ...props}) => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
    }}>
      <Navigation />
      {children}
      <Footer />
    </Box>
  )
}

export default Layout