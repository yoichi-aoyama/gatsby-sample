import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
    <Layout>
        <Seo title="aboutページ"/>
        <h1>
            aboutページ
        </h1>
        <p>aboutページにようこそ</p>
        <Link to="/">ホームに戻る</Link>
    </Layout>
)

export default AboutPage
