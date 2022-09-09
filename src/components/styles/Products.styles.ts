import { createStyles } from "@mantine/core";

export default createStyles(() => ({
  mainContainer: {
    height: "100vh"
  },
  menuContainer: {
    padding: "0 10rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    marginTop: "5rem",
    fontSize: "5rem"
  },
  categoriesContainer: {
    textAlign: "center"
  }
}))