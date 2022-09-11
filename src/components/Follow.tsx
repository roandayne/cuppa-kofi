import { Anchor, BackgroundImage, Box, Image, Text } from '@mantine/core'
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
        justifyContent: "center",
        margin: "10rem 0 5rem 0",
        padding: "0rem 20rem 0 20rem",
        minHeight: "100%",
        textAlign: "center"
      }}
    >
      <Text sx={{fontSize: "72px"}}>We are open Mondays to Fridays, 10 AM to 10 PM</Text>
    </BackgroundImage>
  )
}

export default Follow