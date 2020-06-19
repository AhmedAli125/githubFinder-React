import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class SearchBox extends Component{
    state = {
        text : ''
    };

    static propTypes = {
        searchUser : PropTypes.func.isRequired,
        clearUsers : PropTypes.func.isRequired,
        showClear : PropTypes.bool.isRequired,
        setAlert : PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name] : e.target.value });
    
    onSubmit = e => {
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert(true);
        } else {
            this.props.searchUser( this.state.text );
            this.setState( {text : ''} );
        }
    }
    render(){
        const { clearUsers, showClear } = this.props;

        return(
            <div>
                <form onSubmit={this.onSubmit} className="form">
                <div className="form-group mt-3">
                    <input type="text" name='text' className="form-control" id="inputAddress" placeholder="Search Users..." value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" className="btn btn-dark btn-block mt-2" value="Search" />
                </div>
            </form>
            {
                showClear && <button className='btn btn-primary btn-block' onClick={clearUsers}>Clear</button>
            }
            </div>
        );
    }
}
export default SearchBox;