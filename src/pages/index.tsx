import * as React from "react"
import type { HeadFC } from "gatsby"
import Landing from "../components/Landing"
import "../styles/global.css"
import Layout from "../components/Layout"
import Welcome from "../components/Welcome"
import Trending from "../components/Trending"
import Merchandise from "../components/Merchandise"
import Follow from "../components/Follow"

const IndexPage = () => {
  return (
    <Layout>
      <Landing />
      <Welcome />
      <Trending />
      <Follow />
      <Merchandise />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
