import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class SearchBox extends Component{
    state = {
        text : ''
    };

    static propTypes = {
        searchUser : PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name] : e.target.value });
    
    onSubmit = e => {
        e.preventDefault();
        // console.log(this.state.text);
        this.props.searchUser(this.state.text);
    }
    render(){
        return(
            <form onSubmit={this.onSubmit} className="form">
                <div className="form-group mt-3">
                <input type="text" name='text' className="form-control" id="inputAddress" placeholder="Search Users..." value={this.state.text} onChange={this.onChange}/>
                <input type="submit" className="btn btn-dark btn-block mt-1" value="Search" />
            </div>
            </form>
        );
    }
}
export default SearchBox;