import { gql } from 'apollo-boost'
import { client } from '../apollo/apollo'

export const getPath = async() => {

    const _query = gql`
    query getLength {
        posts(where: {categoryName: "portfolio"}) {
            edges {
                node {
                    postId
                }
            }
        }
    }`

    try{
        const getData = await client.query({ query : _query });
        const path = getData.data.posts.edges;
        return path;
    } catch(err){
        console.log(err);
        return null;
    }

}

export default getPath