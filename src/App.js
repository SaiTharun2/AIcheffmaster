import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/signup';

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
