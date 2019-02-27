import React from 'react';

function Friend(props) {
  return (
    <p key={props.friend}>{props.friend}</p>
  );
}

export default Friend;