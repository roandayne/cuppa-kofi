import { Box, Text, Image } from '@mantine/core'
import React from 'react'
import Navigation from './Navigation'
import useStyles from "./styles/Landing.styles"

const Landing = () => {
  const { classes } = useStyles()

  return (
    <Box className={classes.container}>
      <Image 
        height={"100vh"}
        style={{ position: "absolute", height: "100%" }} 
        src='./landing-bg.jpg'
        alt="coffee-shop-bg"
      />

      <Text className={classes.header}>cuppa kofi.</Text>
    </Box>
  )
}

export default Landing