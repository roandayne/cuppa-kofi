import { Box, Burger, Image, Text } from '@mantine/core'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import useStyles from "./styles/Navigation.styles"

const Navigation = () => {
  const { classes, cx } = useStyles()
  const [scroll, setScroll] = useState(false)

  const changeBackground = () => {
    if (typeof window !== 'undefined' && window.scrollY >= 100)  {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener("scroll", changeBackground)
  }

  return (
    <Box className={cx(classes.container, {
      [classes.scroll]: scroll,
    })}>
      <Link className={classes.link} to="/menu">Menu</Link>
      <Link to="/">
        <Box className={classes.imageContainer}>
          <Image
            height={scroll ? 75 : 100}
            src='./logo.png' 
            alt='cuppa-kofi-logo' 
          />
        </Box>
      </Link>
      <Link className={classes.link} to="/location">Location</Link>
    </Box>
  )
}

export default Navigation