import React from 'react';

function Friend(props) {
  return (
    <div className="friend-card">
      <h6 className="card-name">{props.friend.name}</h6>
      <p className="card-age">{props.friend.age}</p>
      <p className="card-email">{props.friend.email}</p>
    </div>
  );
}

export default Friend;