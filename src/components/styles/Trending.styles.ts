import { createStyles } from "@mantine/core";

export default createStyles(() => ({
  mainContainer: {
    minHeight: "100%",
    display: "flex",
    padding: "10rem 20rem 5rem 20rem",
    flexDirection: "column",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px"
  }
}))