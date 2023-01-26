import React from  'react'

import Layout from "../components/layout"
// import {graphql, useStaticQuery } from 'gatsby'




const BlogPage = () => {

//     const data = useStaticQuery(graphql`
//     query {
//         allMarkdownRemark {
//             edges {
//                 node {
//                     frontmatter {
//                         title
//                     }
//                 }
//             }
//         }
//     }
// `)

    // const blogInfo = data.allMarkdownRemark.edges.map((edge) => {
    //     return (
    //         <li>
    //             <h2>{edge.node.frontmatter.title}</h2>
    //         </li>
    //     )
    // });

    return (
        <Layout>
            <h1>The Mighty List of Blogs</h1>
            <ol>
              {/* {blogInfo} */}
              sample here 
            </ol>
        </Layout>
    )
}

export default BlogPage