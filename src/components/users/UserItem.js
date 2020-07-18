import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div
      className='card'
      style={{
        margin: "5px",
        border: "1px solid",
        height: "auto",
        width: "auto",
      }}
    >
      <img
        className='container-fluid pt-4'
        src={avatar_url}
        alt='userImage'
        style={{ height: "80%", width: "100%" }}
      />
      <div className='card-body'>
        <h5 className='card-title text-center'>{login}</h5>
        <a
          href={html_url}
          className='btn btn-dark d-flex justify-content-center'
          target='_blank'
        >
          Click Here
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
