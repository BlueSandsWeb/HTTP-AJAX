import React from 'react';

function FriendForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={props.name}
          name="name"
          onChange={props.handleChange}
          placeholder="Friend's Name"
          className="form-control"
          />
      </div>
      <div className="form-group">
        <label htmlFor="friendEmail">Age</label>
        <input
          type="number"
          value={props.age}
          name="age"
          onChange={props.handleChange}
          placeholder="New Friend's Name"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={props.email}
          name="email"
          onChange={props.handleChange}
          placeholder="Jay-smyth@gmail.com"
          className="form-control"
          />
      </div>  
      <button onClick={props.handleAddFriend} className="btn btn-success">Add</button>
      <button onClick={props.updateFriend} className="btn btn-info">Change</button>
      <button onClick={props.resetUpdateField} className="btn btn-danger">Back</button>
    </form>
  );
}

export default FriendForm;