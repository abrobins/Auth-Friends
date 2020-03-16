import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const [user, setUser] = useState({
    credentials: {
      username: "",
      password: ""
    }
  });

  const handleChange = e => {
    setUser({
      credentials: {
        ...user.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", user.credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={user.credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={user.credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;

// class Login extends React.Component {
//   state = {
//     credentials: {
//       username: "",
//       password: ""
//     }
//   };

//   handleChange = e => {
//     this.setState({
//       credentials: {
//         ...this.state.credentials,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   login = e => {
//     e.preventDefault();
//     // Make a POST request and send the credentials object to the api
//     axiosWithAuth()
//       .post("/api/login", this.state.credentials)
//       .then(res => {
//         window.localStorage.setItem("token", res.data.payload);
//         // navigate the user to /protected (whatever landing page)
//         this.props.history.push("/protected");
//       })
//       .catch(err => console.log(err));
//   };
