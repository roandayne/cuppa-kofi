import { createStyles } from "@mantine/core";
import { url } from "inspector";

export default createStyles(() => ({
  mainContainer: {
    minHeight: "100%",
    display: "flex",
    padding: "10rem 20rem 0 20rem",
  },
  rightContainer: {
    width: "50vw",
    display: "flex",
    justifyItems: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    marginRight: "20px",
    flexDirection: "column",
  },
  leftContainer: {
    width: "50vw"
  },
  textureContainer: {
    position: "relative",
    top: "-350px",
    left: "400px",
  }
}))