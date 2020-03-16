import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = () => {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    // const token = window.localStorage.getItem("token");
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log(res.data);
        setFriendList(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  //   useEffect(async () => {
  //     try {
  //       const res = await axiosWithAuth().get("/api/friends");
  //       setFriendList(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }, []);

  return (
    <div>
      <h3>Testing this is showing up</h3>
      {friendList.map(friend => {
        <>
          <p>Name: {friend.name}</p>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
        </>;
      })}
    </div>
  );
};

// class FriendsList extends React.Component {
//   state = {
//     friends: []
//   };

//   componentDidMount() {
//     this.getData();
//   }

//   getData = () => {
//     const token = window.localStorage.getItem("token");
//     axiosWithAuth()
//       .get("/api/friends")
//       .then(res => {
//         console.log("res.data.data", res.data);
//         this.setState({
//             friends: res.data.data.map
//         })

//       })
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <div>
//         <h2>Friends List inside FriendsList component</h2>
//       </div>
//     );
//   }
// }

export default FriendsList;
