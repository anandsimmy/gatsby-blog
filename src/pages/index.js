import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogLink= styled(Link)`
  text-decoration: none
`
const BlogTitle= styled.h3`
  margin-bottom: 10px;
  color: #663399;
`

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
             <BlogLink to={node.fields.slug}>
              <BlogTitle>
                {node.frontmatter.title} - {node.frontmatter.date}
              </BlogTitle>
             </BlogLink>
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
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
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
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`