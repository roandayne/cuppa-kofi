import { BoxProps } from '@mantine/core'
import React from 'react'

interface LayoutProps extends BoxProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children, ...props}) => {
  return (
    <>
      {children}
    </>
  )
}

export default Layout