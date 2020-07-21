import React, { Component, Fragment } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/about";
import Users from "./components/users/Users";
import User from "./components/users/User";
import SearchBox from "./components/users/SearchBox";
import Alert from "./components/layout/Alert";
import axios from 'axios';
import "./App.css";

class App extends Component {
  state = {
    loading: false,
    users: [],
    user : {},
    repos : [],
    alert: false
  }

  //Search GitHub Users
  searchUser = async text => {
    this.setState({loading : true});
    const resolve = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({
      users: resolve.data.items,
      loading: false
    });
  }


  //get a single user
  getUser = async (userName) => {
    this.setState({loading : true});
    const resolve = await axios.get(`https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({
      user: resolve.data,
      loading: false
    });
  }

  //get user repos
  getUserRepos = async (userName) => {
    this.setState({loading : true});
    const resolve = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({
      repos: resolve.data,
      loading: false
    });

    // console.log(this.state.repos);
  }

  //clear users
  clearUsers = () => this.setState({users: [] , loading:false});

  //show Alert
  setAlert = val => {
    this.setState({ alert : val });
    setTimeout(() => {
      this.setState({ alert : false });
    }, 3000);
  }

  render() {
    const { users, loading, user, repos } = this.state;
    return ( 
      <Router>
        <div className = 'App pt-4' >
          <Navbar />
          <div className = 'container' >
            {this.state.alert && <Alert isAlert = {this.state.alert}/>}
            <Switch>
              <Route exact path = "/" render={props => (
                <Fragment>
                  <SearchBox 
                    searchUser={this.searchUser} 
                    clearUsers={this.clearUsers} 
                    showClear={ users.length > 0 ? true : false }
                    setAlert={ this.setAlert }
                  />
                  <Users loading = { loading } users = { users }/>
                </Fragment>
              )} />
              <Route exact path = "/about" component = {About} />
              <Route exact path = "/user/:login" render={ props => (
                <User { ...props } getUser={this.getUser} user={user} loading={loading} getUserRepos = { this.getUserRepos } repos={ repos } />
              ) } />
            </Switch>
          </div> 
        </div>
      </Router>
    );
  }
}

export default App;