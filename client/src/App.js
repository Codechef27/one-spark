import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setContext } from "@apollo/client/link/context";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Navbar from './components/Navbar'
import GameNav from './components/GameNav';
import Minecraft from './pages/Minecraft';
import Minions from './pages/Minions';
import Princesses from './pages/Princesses';
import Animals from './pages/Animals';
import ABCGame from "./pages/ABC'S";
import Numbers from './pages/Numbers';
import Records from './pages/Records';
import Home from './pages/Home'


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
        <GameNav />
        <>
        
        </>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/records' element={<Records />} />
          <Route path='/minecraft' element={<Minecraft/>} />
          <Route path='/minions' element={<Minions/>}/> 
          <Route path='/princesses' element={<Princesses/>}/>
          <Route path='/animals' element={<Animals/>}/>
          <Route path="/abc's" element={<ABCGame/>}/>
          <Route path="/numbers" element={<Numbers/>}/>
        </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
