import { BoxProps, Box, MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications';
import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import { Helmet } from 'react-helmet';

interface LayoutProps extends BoxProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children, ...props}) => {
  return (
    <MantineProvider
      theme={{
        fontFamily: 'Lexend Peta, sans-serif',
      }}
      withNormalizeCSS 
      withGlobalStyles
    >
      <Helmet>
        <title>Cuppa Kofi</title>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo.png"
        />
        <link href="https://fonts.googleapis.com/css2?family=Combo&family=Lexend+Peta:wght@300&family=Noto+Sans+Buhid&family=Poppins:wght@300&family=Quicksand:wght@300;400;500;600;700&family=Qwitcher+Grypen:wght@700&display=swap" rel="stylesheet" />
      </Helmet>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#D8CFC6"
      }}>
        <NotificationsProvider>
          <Navigation />
          {children}
          <Footer />
        </NotificationsProvider>
        
      </Box>
    </MantineProvider>
    
  )
}

export default Layout