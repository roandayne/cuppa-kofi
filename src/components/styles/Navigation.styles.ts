import { createStyles } from "@mantine/core";

export default createStyles(() => ({
  container: {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 100,
    height: "130px",
    padding: "15px 0",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageContainer: {
    height: "100%"
  },
  scroll: {
    backgroundColor: "#c8a47e"
  },
  link: {
    fontSize: "2rem"
  }
}))