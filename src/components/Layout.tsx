import { BoxProps, Box } from '@mantine/core'
import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import { Helmet } from 'react-helmet';

interface LayoutProps extends BoxProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children, ...props}) => {
  return (
    <>
      <Helmet>
        <title>Cuppa Kofi</title>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo.png"
        />
      </Helmet>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
      }}>
        <Navigation />
        {children}
        <Footer />
      </Box>
    </>
    
  )
}

export default Layout