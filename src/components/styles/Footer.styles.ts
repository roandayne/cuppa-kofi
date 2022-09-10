import { createStyles } from "@mantine/core"

export default createStyles(() => ({
  containier: {
    background: "#c8a47e",
    boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.12)",
    boxSizing: "border-box",
    width: '100%',
    textAlign: "left",
    font: "bold 16px sans-serif",
    padding: "55px 50px",
    display: "flex",
    marginTop: "10rem"
  },
  logoContainer: {
    height: "100%",
    width: "calc(100vw * 0.33)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  instagramContainer: {
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    marginTop: "20px"
  }
}))