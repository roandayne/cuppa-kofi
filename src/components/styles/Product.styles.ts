import { createStyles } from "@mantine/core";

export default createStyles(() => ({
  mainContainer: {
    height: "400px",
    width: "300px",
    padding: "3rem 1.5rem"
  },
  backgroundImageContainer: {
    height: "100% !important",
    width: "100%",
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    fontSize: "18px",
    marginTop: "10px",
  },
  description: {
    padding: "20px",
    textAlign: "center",
    fontSize: "12px"
  },
  price: {
    padding: "0 20px",
    textAlign: "center"
  }
}))