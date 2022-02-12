import { gql } from 'apollo-boost'
import { client } from '../apollo/apollo'

export const getPosts = async(id) => {

    const _query = gql`
        query getPost {
            posts(where: {categoryName: "portfolio"}) {
                edges {
                node {
                    title
                    postId
                    featuredImage {
                        node {
                            altText
                            mediaItemUrl
                        }
                    }
                }
                }
            }
        }
    `
    try{
        const getData = await client.query({ query : _query });
        const posts = getData.data.posts.edges;
        return posts;
    }catch(err){
        console.log(err);
        return null;
    };
    
}

export default getPosts