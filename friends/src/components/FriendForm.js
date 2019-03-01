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
      {props.update ? 
        <div className="form-btns">
          <button onClick={(e) => props.updateFriend(e)} className="btn btn-info form-btn">Change</button>
          <button onClick={props.resetUpdateField} className="btn btn-danger form-btn">Back</button>
        </div> : 
        <button onClick={props.handleAddFriend} className="btn btn-success form-btn">Add</button>
        }
    </form>
  );
}

export default FriendForm;