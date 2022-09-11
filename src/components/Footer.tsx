import { Box, Image, Text, TextInput, Textarea, Button } from '@mantine/core'
import React from 'react'
import useStyles from "./styles/Footer.styles"
import { FaInstagram, FaFacebookSquare, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useForm } from '@mantine/form';

const Footer = () => {
  const { classes } = useStyles()

  const form = useForm({
    initialValues: {
      email: '',
      user: {
        firstName: '',
        lastName: '',
      },
    },
    validate: {
      email: (value) => (value.length < 2 ? 'Invalid email' : null),
      user: {
        firstName: (value) => (value.length < 2 ? 'First name must have at least 2 letters' : null),
      },
    },
  });

  return (
    <Box>
      <Box className={classes.containier}>
        <Box className={classes.logoContainer}>
          <Image src='./logo.png' height={250} fit="contain" />
        </Box>
        <Box className={classes.logoContainer}>
          <Text>CONNECT WITH US</Text>
          <Box className={classes.instagramContainer}>
            <FaPhoneAlt style={{marginRight: "10px"}} /><Text>0926 207 8836</Text>
          </Box>
          <Box className={classes.instagramContainer}>
            <FaEnvelope style={{marginRight: "10px"}} /><Text>cuppakofiisabela@gmail.com</Text>
          </Box>
          <Box className={classes.instagramContainer}>
            <FaInstagram style={{marginRight: "10px"}} /><Text>instagram.com/cuppa_kofi</Text>
          </Box>
          <Box className={classes.instagramContainer}>
            <FaFacebookSquare style={{marginRight: "10px"}} /><Text>facebook.com/CuppaKofi</Text>
          </Box>
        </Box>
        <Box className={classes.logoContainer}>
          <Text>GET IN TOUCH</Text>
          <Box sx={{width: "100%"}}>
            <TextInput
              sx={{marginTop: "20px"}}
              placeholder="Your name"
              label="Full name"
              withAsterisk
            />
            <Textarea
              sx={{marginTop: "20px"}}
              placeholder="Your comment"
              label="Your comment"
              withAsterisk
              minRows={3}
              maxRows={6}
            />
            <Button sx={{
              marginTop: "20px", 
              backgroundColor: "#BDB2A7", 
              "&:hover": {
                backgroundColor: "#E8DACD"
            }}}>Send</Button>
          </Box>
        </Box>
      </Box>

    </Box>
    
  )
}

export default Footer