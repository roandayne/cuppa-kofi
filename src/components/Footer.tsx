import { Box, Image, Text, TextInput, Textarea, Button, Group, LoadingOverlay } from '@mantine/core'
import React, { useState } from 'react'
import useStyles from "./styles/Footer.styles"
import { FaInstagram, FaFacebookSquare, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useForm } from '@mantine/form';
import emailjs from '@emailjs/browser';
import { showNotification } from '@mantine/notifications';

const Footer = () => {
  const { classes } = useStyles()
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      from_name: '',
      message: '',
      reply_to: '',
    },

    validate: {
      from_name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      message: (value) => (value.length < 2 ? 'Message must have at least 2 letters' : null),
      reply_to: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const sendEmail = () => {
    setLoading(true)
    emailjs.send("service_kxhbcrt", "template_ishzmny", form.values, 'eXz2uc-cN1hwoZVd-')
      .then((result) => {
        if (result.text == "OK") {
          form.setValues({
            from_name: '',
            message: '',
            reply_to: '',
          })

          showNotification({
            title: 'Message sent',
            message: 'Thank you for your message. We will get back to you soon.',
          })

          setLoading(false)
        }
      }, (error) => {
        showNotification({
          title: 'Error',
          message: error.text,
        })
          setLoading(false)
      });
  }



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
            <form onSubmit={form.onSubmit(sendEmail)}>
            <LoadingOverlay loading={loading} overlayBlur={2} />
              <TextInput
                sx={{marginTop: "20px"}}
                placeholder="Your name"
                label="Full name"
                withAsterisk
                {...form.getInputProps('from_name')}
              />
              <TextInput
                sx={{marginTop: "20px"}}
                placeholder="Your email"
                label="Full email"
                withAsterisk
                {...form.getInputProps('reply_to')}
              />
              <Textarea
                sx={{marginTop: "20px"}}
                placeholder="Your message"
                label="Your message"
                withAsterisk
                minRows={3}
                maxRows={6}
                {...form.getInputProps('message')}
              />
              
              <Group position="left" mt="md">
                <Button 
                  sx={{
                    marginTop: "20px", 
                    backgroundColor: "#BDB2A7", 
                    "&:hover": {
                      backgroundColor: "#E8DACD"
                  }}}
                  type="submit"
                  loading={loading}
                >
                  Send
                </Button>
              </Group>
            </form>
          </Box>
        </Box>
      </Box>

    </Box>
    
  )
}

export default Footer