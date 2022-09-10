import { Anchor, BackgroundImage, Box, Image } from '@mantine/core'
import React from 'react'
import { FaInstagram, FaFacebookSquare, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Follow = () => {
  return (
    <BackgroundImage
      src='./texture.jpg' 
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "500px",
        alignItems: "center",
        alignContent: "center",
        margin: "10rem 0 5rem 0",
        padding: "5rem 20rem 0 20rem",
        minHeight: "100%",
      }}
    >
      <Image src='./logo.png' height={200} />
      <Anchor sx={{fontSize: "5rem", textDecoration: "none"}}>Find us on Instagram</Anchor>
    </BackgroundImage>
  )
}

export default Follow