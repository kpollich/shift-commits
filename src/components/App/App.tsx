import ApolloClient, { InMemoryCache } from "apollo-boost";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import CommitList from "../CommitList/CommitList";
import Layout from "../Layout/Layout";

const client: ApolloClient<InMemoryCache> = new ApolloClient({
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`
  },
  uri: "https://api.github.com/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <CommitList />
      </Layout>
    </ApolloProvider>
  );
}

export default App;
