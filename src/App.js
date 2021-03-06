import React, { useState, Fragment } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/about";
import Users from "./components/users/Users";
import User from "./components/users/User";
import SearchBox from "./components/users/SearchBox";
import Alert from "./components/layout/Alert";
import axios from 'axios';
import GithubState from './context/github/GithubState';
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [alert, setAlert] = useState(false);

  //get a single user
  // const getUser = async (userName) => {
  //   setLoading(true);
  //   const resolve = await axios.get(`https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   setUser(resolve.data);
  //   setLoading(false);
  // }

  //get user repos
  
  //clear users
  // const clearUsers = () => {
  //   setUsers([]);
  //   setLoading(false);
  // }
    

  //show Alert
  const showAlert = val => {
    setAlert(val);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }
  return ( 
      <GithubState>
      <Router>
        <div className = 'App pt-4' >
          <Navbar />
          <div className = 'container' >
            {alert && <Alert isAlert = {alert}/>}
            <Switch>
              <Route exact path = "/" render={props => (
                <Fragment>
                  <SearchBox
                    // clearUsers={clearUsers} 
                    // showClear={ users.length > 0 ? true : false }
                    setAlert={ showAlert }
                  />
                  <Users />
                </Fragment>
              )} />
              <Route exact path = "/about" component = {About} />
              <Route exact path = "/user/:login" render={ props => (
                <User { ...props } />
              ) } />
            </Switch>
          </div> 
        </div>
      </Router>
      </GithubState>
    );
}

export default App;