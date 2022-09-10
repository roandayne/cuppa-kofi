
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Product from './Product'
import axios from "axios";
import { Anchor, Box, Image, Text } from '@mantine/core';
import useStyles from "../components/styles/Products.styles"
import _ from 'lodash';


const Products = () => {
  const { classes, cx } = useStyles()
  const [products, setProducts] = useState<any>([])
  const [filtereProducts, setFiltereProducts] = useState<any>(products)
  const [categories, setCategories] = useState([])
  const [filter, setFilter] = useState<string>("")
  const [active, setActive] = useState("all")

  useEffect(() => {
    const fetchData = () => {
      axios.get("/products")
        .then((response) => {
          setProducts(response.data)
          setFiltereProducts(response.data)
        })
      axios.get("/categories")
        .then((res) => setCategories(res.data))
    }

    fetchData()
    
  }, [])

  useEffect(() => {
    const prod = [...products].filter((product: any) => product.category == filter)

    setFiltereProducts(prod)
  }, [filter])
  
  return (
    <Box className={classes.mainContainer}>
      <Box>
        <Image 
          src="./menu-bg.jpg"
          height={300}
        />
      </Box>
      <Text className={classes.text}>Menu</Text>
      <Box className={classes.categoriesContainer}>
        <Anchor 
          key="all" 
          className={cx(classes.anchor, {
            [classes.activeAnchor] : active == "all"
          })}
          onClick={() => {
            setFiltereProducts(products)
            setActive("all")
          }}
        >
          All
        </Anchor>
        {
          categories.map((category: string) => {
            return <Anchor 
              key={category} 
              className={cx(classes.anchor, {
                [classes.activeAnchor] : active == category
              })}
              onClick={() => {
                setFilter(category)
                setActive(category)
              }}
            >
              {category.replaceAll("_", " ").toUpperCase()}
            </Anchor>
          })
        }
      </Box>
      <Box className={classes.menuContainer}>
        {
          filtereProducts.map((product: any) => {
            return <Product key={product.id} {...product} />
          })
        }
      </Box>
    </Box>
    
  )
}

export default Products