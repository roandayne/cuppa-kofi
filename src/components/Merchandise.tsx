
import React, { useEffect, useState } from 'react'
import { Carousel } from '@mantine/carousel';
import { Anchor, Box, Button, Image, Text } from '@mantine/core';
import useStyles from "./styles/Trending.styles"
import _ from 'lodash';
import axios from 'axios';
import Product from './Product';
import { Link } from 'gatsby';


const Merchandise = () => {
  const { classes, cx } = useStyles()
  const [products, setProducts] = useState<any>([])

  useEffect(() => {
    const fetchData = () => {
      axios.get("http://localhost:8001/products")
        .then((response) => {
          setProducts(response.data)
        })
    }

    fetchData()
    
  }, [])
  
  return (
    <Box className={classes.mainContainer}>
      <Text sx={{fontSize: "3rem"}}>Merchandise</Text>
      <Box sx={{position: "relative", left: "50%", transform: "translate(-50%, 0)"}}>
        <Carousel
          height={400}
          slideSize="30%"
          slideGap="md"
          align="start"
        >
          {
            products.map((product: any) => {
              return <Carousel.Slide key={product.id}>
                <Product {...product} />
              </Carousel.Slide>
            })
          }
        </Carousel>
      </Box>
      <Box className={classes.buttonContainer}>
        <Button>
          <Link to="/menu">All Merchandise</Link>
        </Button>
      </Box>
    </Box>
    
  )
}

export default Merchandise