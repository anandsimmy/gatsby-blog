import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data: { allMarkdownRemark: { totalCount, edges } } }) => {
 return (
    <Layout>
      <SEO title="Home" />
      <h1>Just random thoughts</h1>
      <h4>No.of articles: { totalCount }</h4>
      <div>
        {
         edges.map(({ node })=>(
           <div key={node.id}>
             <span>{node.frontmatter.title} - {node.frontmatter.date}</span>
             <p>
               {
                 node.excerpt
               }
             </p>
           </div>
          )) 
        }
        </div>
    </Layout>
  )
}

export const blogs= graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          html
          excerpt
        }
      }
      totalCount
    }
  }
`