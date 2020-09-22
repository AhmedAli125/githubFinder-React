import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repo from '../repos/Repos';
import { Link } from 'react-router-dom'; 
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);
    
    const { getUser, loading, user, repos, getUserRepos } = githubContext;
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);

        //get rid of dependency warning
        //eslint-disabled-next-line
    }, []);

        const {
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = user;
        if(loading) 
        return <Spinner />
        else
        return (
            <div className="pt-5">
                    <Link to = '/' className = 'btn btn-secondary mr-3'>
                        Return
                    </Link>
                    Hireable : { '' }
                    {hireable ? (
                        <i className='fas fa-check text-success' />
                        ) : (
                            <i className='fas fa-times-circle text-danger' />
                            )}

                    <div className='container mt-2'>
                        <div className='row'>
                            <div className='col'>
                                <div className='card p-1'>
                                    <img className='card-img-top m-auto' src={avatar_url} alt='github user image' style={{width:'200px'}}/>
                                    <h2 className='text-center'>{name}</h2>
                                    <p className='text-center'>Location : {location}</p>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='card p-2'>
                                    {bio && (
                                        <Fragment>
                                            <h4>Bio</h4>
                                            <p>{bio}</p>
                                        </Fragment>
                                    )}

                                    <a href={html_url} className='btn btn-primary' target='_blank'>Visit Github Profile</a>
                                    <ul className='list-group list-group-flush'>
                                        {
                                            login && <Fragment>
                                                <li className = 'list-group-item'>
                                                    <strong>Username : </strong> {login}
                                                </li>
                                            </Fragment>
                                        }
                                        {
                                            company && <Fragment>
                                                <li className = 'list-group-item'>
                                                    <strong>Company : </strong> {company}
                                                </li>
                                            </Fragment>
                                        }
                                        {
                                            blog && <Fragment>
                                                <li className = 'list-group-item'>
                                                    <strong>Website : </strong> {blog}
                                                </li>
                                            </Fragment>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row m-3 border p-2'>
                        <div className='col-md-2'>
                        </div>
                        <div className='col-md-2'>
                                    <span className="badge badge-primary">Followers : {followers}</span>
                        </div>
                        <div className='col-md-2'>
                                    <span className="badge badge-secondary">Following : {following}</span>
                        </div>
                        <div className='col-md-2'>
                                    <span className="badge badge-info">Public Repos : {public_repos}</span>
                        </div>
                        <div className='col-md-2'>
                                    <span className="badge badge-light">Public Gist : {public_gists}</span>
                        </div>
                    </div>
                    <div className='row m-3 border p-5 p-auto'>
                        <Repo repos={repos} /> 
                    </div>
                </div>
            )
}

export default User
