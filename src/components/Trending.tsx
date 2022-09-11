
import React, { useEffect, useState } from 'react'
import { Carousel } from '@mantine/carousel';
import { Anchor, Badge, Box, Button, Card, Group, Image, Text } from '@mantine/core';
import useStyles from "./styles/Trending.styles"
import _ from 'lodash';
import axios from 'axios';
import Product from './Product';
import { Link } from 'gatsby';
import ProductCard from './ProductCard';


const Trending = () => {
  const { classes, cx } = useStyles()
  const [products, setProducts] = useState<any>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/menu.json")
      setProducts(response.data.products)
    }

    fetchData()
  }, [])
  
  return (
    <Box className={classes.mainContainer}>
      <Text sx={{fontSize: "3rem", marginBottom: "50px"}}>Trending Products</Text>
      <Box sx={{
        position: "relative", 
        left: "50%",
        transform: "translate(-50%, 0)", 
        display: "flex",
      }}>
        {
          products.filter((product: any) => product.trending).map((product: any) => {
              return <ProductCard
                imgSrc={product.image}
                description={product.description}
                name={product.name}
              />
          })
        }
      </Box>
      <Box className={classes.buttonContainer}>
        <Button sx={{
          backgroundColor: "#BDB2A7",
          "&:hover": {
            backgroundColor: "#E8DACD"
          }
        }}>
          <Link to="/menu">All Menu</Link>
        </Button>
      </Box>
    </Box>
    
  )
}

export default Trending