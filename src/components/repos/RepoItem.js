import React from 'react';
import PropTypes from 'prop-types';

export const RepoItem = ({ repo }) => {
    // repo.map(el => console.log(el));
    console.log(repo);
    return (
        <div className='card m-3 text-center p-2' style={{ width: '18rem' }}>
            <div className='container' style={{height: '5rem'}}>
                <h3>{repo.name}</h3>
            </div>
            <p><strong>Private Status</strong> : {repo.private}</p>
            <p><strong>Watchers</strong> : {repo.watchers}</p>
            <a href={repo.html_url} target='_blank' className='btn btn-secondary'>View Repository</a>
        </div>
    )
}

RepoItem.propTypes = {
    repo : PropTypes.object.isRequired
};

export default RepoItem;
