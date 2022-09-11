import { Anchor, BackgroundImage, Box, Image, Text } from '@mantine/core'
import React from 'react'
import { FaInstagram, FaFacebookSquare, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Follow = () => {
  return (
    <BackgroundImage
      src='./giphy.gif' 
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "500px",
        alignItems: "center",
        justifyContent: "center",
        margin: "10rem 0 5rem 0",
        padding: "0rem 20rem 0 20rem",
        minHeight: "100%",
        textAlign: "center",
        backgroundPosition: "fixed"
      }}
    >
      <Text sx={{
        fontSize: "72px", 
        color: "#BDB2A7", 
        textShadow: "2px 4px 3px rgba(0,0,0,0.3)"
      }}>We are brewing Mondays to Fridays, 10 AM to 10 PM</Text>
    </BackgroundImage>
  )
}

export default Follow