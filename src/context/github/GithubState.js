import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USER,
    GET_USER,
    GET_REPOS
} from '../types'

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //search user
    const searchUser = async text => {
        setLoading();
        const resolve = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        // setUsers(resolve.data.items);
        dispatch({
            type: SEARCH_USERS,
            payload: resolve.data.items
        });
      }

    //get user
    const getUser = async (userName) => {
        setLoading();
        const resolve = await axios.get(`https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        dispatch({
            type: GET_USER,
            payload:resolve.data
        });
      }

    //get repos
    const getUserRepos = async (userName) => {
        setLoading();
        const resolve = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        // setRepos(resolve.data);
        // setLoading(false);
        dispatch({
            type: GET_REPOS,
            payload: resolve.data
        });
      }

    //clear users
    const clearUsers = () => dispatch({type:CLEAR_USER});

    //set loading
    const setLoading = () => dispatch({type:SET_LOADING});

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUser,
            clearUsers,
            getUser,
            getUserRepos
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;