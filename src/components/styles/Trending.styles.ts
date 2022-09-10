import { createStyles } from "@mantine/core";

export default createStyles(() => ({
  mainContainer: {
    minHeight: "100%",
    display: "flex",
    padding: "5rem 20rem 0 20rem",
    flexDirection: "column",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}))