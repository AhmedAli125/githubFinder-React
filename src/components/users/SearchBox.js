import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types'
import GithubContext from '../../context/github/githubContext';

const SearchBox = ({ setAlert }) => {
    const githubContext = useContext(GithubContext); 
    const [ text, setText ] = useState('');

    const onChange = e => setText(e.target.value);
    
    const onSubmit = e => {
        e.preventDefault();
        if(text === ''){
            setAlert(true);
        } else {
            githubContext.searchUser( text );
            setText('');
        }
    }
        return(
            <div>
                <form onSubmit={onSubmit} className="form">
                <div className="form-group mt-5">
                    <input type="text" name='text' className="form-control" id="inputAddress" placeholder="Search Users..." value={text} onChange={onChange}/>
                    <input type="submit" className="btn btn-dark btn-block mt-2" value="Search" />
                </div>
            </form>
            {
                githubContext.users.length > 0 && <button className='btn btn-primary btn-block' onClick={githubContext.clearUsers}>Clear</button>
            }
            </div>
        );
    }
SearchBox.propTypes = {
    setAlert : PropTypes.func.isRequired
};
export default SearchBox;