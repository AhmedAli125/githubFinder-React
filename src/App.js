import React, {
  Component
} from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import SearchBox from "./components/users/SearchBox";
import axios from 'axios';
import "./App.css";

class App extends Component {
  state = {
    loading: false,
    users: []
  }

  // async componentDidMount() {
  //   this.setState({
  //     loading: true
  //   });
  //   const resolve = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   this.setState({
  //     users: resolve.data,
  //     loading: false
  //   });
  // }


  
  //Search GitHub Users
  searchUser = async text => {
    this.setState({loading : true});
    const resolve = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({
      users: resolve.data.items,
      loading: false
    });
  }
  render() {
    return ( 
    <div className = 'App' >
      <
      Navbar / >

      <div className = 'container' >

        <SearchBox searchUser={this.searchUser}/>
        <Users loading = {
          this.state.loading
        }
        users = {
          this.state.users
        }
        /> 
      </div> 
    </div>
    );
  }
}

export default App;