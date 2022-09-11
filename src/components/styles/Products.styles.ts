import { createStyles } from "@mantine/core";

export default createStyles(() => ({
  mainContainer: {
    minHeight: "100vh",
    marginBottom: "100px",
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
  },
  anchor: {
    margin: "18px",
    fontSize: "24px",
    textDecoration: "none !important",
    color: "black"
  },
  activeAnchor: {
    borderBottom: "6px solid #c8a47e",
    paddingBottom: "10px"
  }
}))