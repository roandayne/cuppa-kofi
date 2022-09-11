import { createStyles } from "@mantine/core";

export default createStyles(() => ({
  container: {
    minHeight: "100vh",
    width: "100vw",
    position: "relative",
  },
  header: {
    position: "absolute",
    top: "45%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontSize: "6.5rem",
    // color: "black",
    // textShadow: "1px 1px rgba(255,255,255,0.8)"

    // color: "transparent",
    // background: "black",
    // backgroundClip: "text",
    // textShadow: "0px 3px 3px rgba(255,255,255,0.8)",

    color: "rgba(0,0,0,1)",
    background: "transparent",
    textShadow: "3px 2px 3px rgba(255,255,255,.2)",
  }
}))