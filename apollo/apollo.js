import ApolloClient, { InMemoryCache } from 'apollo-boost';

export const client = new ApolloClient({
    uri : `http://${process.env.WORDPRESS_URL}/graphql`,
    cache: new InMemoryCache(),
});