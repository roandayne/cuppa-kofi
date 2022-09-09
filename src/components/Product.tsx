
import { BackgroundImage, Box, Image, Text } from '@mantine/core'
import React from 'react'
import useStyles from "../components/styles/Product.styles"

interface ProductProps {
  id: number
  name: string
  image: string
  description: string
  category: string
  sp: {
    price: number
    size: string
  }
}

const Product: React.FC<ProductProps> = ({id, name, image, description, category, sp}) => {
  const { classes } = useStyles()
  return (
    <Box className={classes.mainContainer}>
      <BackgroundImage className={classes.backgroundImageContainer} src="./product-bg.jpg">
        <Image src={image} />
      </BackgroundImage>
      <Text className={classes.text}>{name}</Text>
    </Box>
  )
}

export default Product