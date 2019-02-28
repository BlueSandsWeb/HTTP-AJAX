import React from 'react';

function NewFriendForm(props) {
  return (
    <form action="">
      <label htmlFor="friendEmail">Name:</label>
      <input
        type="text"
        value={props.addFriendName}
        name="addFriendName"
        onChange={props.handleChange}
        placeholder="New Friend's Name"
      />
      <label htmlFor="friendEmail">Age:</label>
      <input
        type="number"
        value={props.friendAge}
        name="friendAge"
        onChange={props.handleChange}
        placeholder="New Friend's Name"
      />
      <label htmlFor="friendEmail">Email:</label>
      <input
        type="text"
        value={props.friendEmail}
        name="friendEmail"
        onChange={props.handleChange}
        placeholder="Jay-smyth@gmail.com"
      />
      <button onClick={props.handleAddFriend}>Add</button>
    </form>
  );
}

export default NewFriendForm;