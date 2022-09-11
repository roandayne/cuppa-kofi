import { Box, Image, Text } from '@mantine/core'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import useStyles from "./styles/Welcome.styles"

const Welcome = () => {
  const {classes} = useStyles()

  return (
    <>
      <Box className={classes.mainContainer}>
        <Box className={classes.rightContainer}>
          <Text>Cuppa Kofi is a small minimalistic coffee shop perfect for your quick grab-and-gos. We offer a simple but concise menu of coffees, ade, and pastries. Bask into our indie music playlists or study for your exams while you wait for your cuppa kofi!</Text>
        </Box>
        <Box className={classes.leftContainer}>
          <Image src='./right-image.jpg' alt="cuppa kofi cafe" />
        </Box>
      </Box>
    </>
  )
}

export default Welcome