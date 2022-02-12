import { gql } from 'apollo-boost'
import { client } from '../apollo/apollo'


export const getPost = async(id) => {

    const _query = gql`
        query getPost {
            posts(where: {id: ${id}}) {
                edges {
                    node {
                        title
                        content
                        featuredImage {
                            node {
                                altText
                                mediaItemUrl
                            }
                        }
                        tags {
                            nodes {
                                name
                            }
                        }
                    postId
                }
            }
        }
    }`

    try{
        const getData = await client.query({ query : _query });
        const post = getData.data.posts.edges[0].node;
        return post;
    } catch(err){
        console.log(err);
        return null;
    }
    
}

export default getPost