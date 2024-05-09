import React, { useState, useEffect } from "react";
import axios from "axios";

const InterviewQuestion = () => {
  const [users, setUser] = useState([]);
  const [title, setTitle] = useState([]);
  const [selected, setSelected] = useState("");
  //user->name  //https://jsonplaceholder.typicode.com/users
  //post->title  //https://jsonplaceholder.typicode.com/posts
  const userUrl = "https://jsonplaceholder.typicode.com/users";
  const PostUrl = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    selected == "User" && fetchUserData();
    selected == "Post" && fetchPostData();
  }, [selected]);
  const fetchUserData = async () => {
    try {
      const res = await axios.get(userUrl);
      setUser(res.data);
    } catch (e) {
      console.log("error message", e);
    }
  };
  const fetchPostData = async () => {
    try {
      const res = await axios.get(PostUrl);
      setTitle(res.data);
    } catch (e) {
      console.log("error message", e);
    }
  };
  const changeHalder = (selection) => {
    setSelected(selection);
  };
  return (
    <div>
      <input
        type="radio"
        checked={selected == "Post"}
        onChange={() => {
          changeHalder("Post");
        }}
        value="Post"
      />
      <span>Posts</span>
      <input
        type="radio"
        value="User"
        checked={selected == "User"}
        onChange={() => changeHalder("User")}
      />
      <span>Users</span>
      {selected == "User" && users.map((v) => <li>{v.name}</li>)}
      {selected == "Post" && title.map((v) => <li>{v.title}</li>)}
    </div>
  );
};
export default InterviewQuestion;
