import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from "@apollo/client/link/context";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Navbar from './components/Navbar'
import SecondaryNav from './components/SecondaryNav';
import CardGame from './pages/CardGame';
import Records from './pages/Records';
import Home from './pages/Home';




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
        <SecondaryNav />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/records' element={<Records />} />
          <Route path='/game/:card' element={<CardGame/>} />
        </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
