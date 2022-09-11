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
    color: "#1F150F",
    transition: "1s",
  },
  imageContainer: {
    height: "100%"
  },
  scroll: {
    backgroundColor: "#948575",
    color: "#1F150F",
    transition: "1s",
    height: "75px",
    padding: "25px 0",
  },
  link: {
    fontSize: "2rem"
  }
}))