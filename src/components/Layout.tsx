import { BoxProps } from '@mantine/core'
import React from 'react'
import Navigation from './Navigation'

interface LayoutProps extends BoxProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children, ...props}) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

export default Layout