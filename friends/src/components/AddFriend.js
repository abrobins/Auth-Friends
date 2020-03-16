import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = props => {
  const [addFriend, setAddFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e => {
    setAddFriend({ ...addFriend, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", addFriend)
      .then(res => {
        console.log(res);
        setAddFriend(res.data);
        props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={addFriend.name}
          onChange={handleChange}
        />
        <label>Age</label>
        <input
          type="number"
          name="age"
          placeholder="age"
          value={addFriend.age}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={addFriend.email}
          onChange={handleChange}
        />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriend;
