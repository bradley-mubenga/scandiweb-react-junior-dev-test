import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
//Apollo Client
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
//REACT v18+ Renderer
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <ApolloProvider client={client}>
        <App tab="home" />
    </ApolloProvider>
);
