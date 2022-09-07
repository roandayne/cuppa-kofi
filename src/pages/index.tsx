import * as React from "react"
import type { HeadFC } from "gatsby"
import Landing from "../components/Landing"
import "../styles/global.css"
import Layout from "../components/Layout"
import Welcome from "../components/Welcome"

const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <Welcome />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
