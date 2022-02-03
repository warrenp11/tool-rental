import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import About from './components/About';
import Contact from './components/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <StoreProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} /><Route />
            <Route exact path="/success" element={<Success/>} /><Route />
            <Route exact path="/products/:_id" component={Detail} />
            <Route exact path="/about" element={<About/>} /><Route />
            <Route exact path="/contact" element={<Contact />} /><Route />
            <Route exact path="/login" element={<Login />} /><Route />
            <Route exact path="/signup" element={<Signup />} /><Route />
            <Route component={NoMatch} />
          </Routes>
        </StoreProvider>
      </div>
    </ApolloProvider>
  );
}

export default App;
