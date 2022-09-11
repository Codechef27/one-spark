import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from "@apollo/client/link/context";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Navbar from './components/Navbar'

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

function App() {


  return (

    <ApolloProvider client={client}>
      <Router>
        <>
        <Navbar />
        <Routes>
          <Route />
          <Route />
          <Route />
          <Route />
          <Route />
        </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
