const { createFilePath }= require(`gatsby-source-filesystem`)

exports.onCreateNode= ({ node, getNode, actions }) => {
    const { createNodeField }= actions
    if(node.internal.type===`MarkdownRemark`){
        const slug= createFilePath({ node, getNode })
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

exports.createPages= ({ graphql, actions })=>{
    const { createPage }= actions
    return graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                            }
                        }
                    }
                }
        }
    `).then(response=> {
        response.data.allMarkdownRemark.edges.forEach(({ node })=>{
            createPage({
                path: node.fields.slug,
                component: 
            })
        })
    })
}