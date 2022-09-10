
import { BackgroundImage, Box, Image, Text } from '@mantine/core'
import React, { useState } from 'react'
import useStyles from "../components/styles/Product.styles"

interface ProductProps {
  id: number
  name: string
  image: string
  description: string
  category: string
  sp: {
    grande: string,
    venti: string
  }
}

const Product: React.FC<ProductProps> = ({id, name, image, description, category, sp}) => {
  const { classes } = useStyles()
  const [isShown, setIsShown] = useState(false)

  return (
    <Box 
      className={classes.mainContainer} 
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <BackgroundImage className={classes.backgroundImageContainer} src="./product-bg.jpg">
        {isShown ? 
          <Box>
            <Text className={classes.description}>{description}</Text> 
            <Text className={classes.price}>Grande: {sp.grande}</Text>
            <Text className={classes.price}>Venti: {sp.venti}</Text>
          </Box> :
          <Image src={image} />
        }
        
      </BackgroundImage>
      <Text className={classes.text}>{name}</Text>
    </Box>
  )
}

export default Product