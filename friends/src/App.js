import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/";
  };
  return (
    <Router>
      <div className="App">
        <Link to="/protected">
          <h1>Friends List App</h1>
        </Link>

        <nav>
          <button to="/login">Login</button>
          <button onClick={logout}>Logout</button>
        </nav>

        {/* <Link to="/login">Login</Link>
            <Link to="/protected">Protected Page</Link>
         */}
        <Switch>
          {/* Protected Route */}
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <PrivateRoute path="/protected/add" component={AddFriend} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
