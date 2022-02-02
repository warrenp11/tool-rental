import logo from "./logo.svg";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

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
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} /><Route />
        <Route exact path="/about" element={<About />} /><Route />
        <Route exact path="/tools" element={<Tools />} /><Route />
        <Route exact path="/contact" element={<Contact />} /><Route />
        <Route exact path="/login" element={<Login />} /><Route />
        <Route exact path="/signup" element={<Signup />} /><Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
