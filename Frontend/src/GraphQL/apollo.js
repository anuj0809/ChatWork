import { ApolloClient, InMemoryCache, gql, split } from "@apollo/client/core";
import { setClient, query, subscribe } from "svelte-apollo";
import { getMainDefinition } from "@apollo/client/utilities";

import { WebSocketLink } from "@apollo/client/link/ws";
import { SubscriptionClient } from "subscriptions-transport-ws"; // Import the SubscriptionClient module
import { HttpLink } from "@apollo/client/link/http"; // Import HttpLink


// HTTP link
const httpLink = new HttpLink({
  uri: "http://localhost:3000/graphql", // Replace with your GraphQL server URL
});

// WebSocket link
const wsLink = new WebSocketLink(
  new SubscriptionClient("ws://localhost:3000/graphql", {
    reconnect: true,
  })
);

// Split link for queries and subscriptions
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

// Initialize Apollo Client with the split link
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});


export default client
