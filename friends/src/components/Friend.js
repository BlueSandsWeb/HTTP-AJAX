import React from 'react';


function Friend(props) {
  return (
    <div className="card friend-card">
      <h6 className="card-header">{props.friend.name}</h6>
      <div className="card-body">
        <p>Age: {props.friend.age}</p>
        <p>Email: {props.friend.email}</p>
        <div className="card-btn-container">
          <button onClick={(e) => props.removeFriend(e, props.friend.id)} className="btn btn-danger">Delete</button>
          <button onClick={(e) => props.populateUpdateField(e, props.friend)} className="btn btn-info">Update</button>
        </div>
      </div>
    </div>
  );
}

export default Friend;