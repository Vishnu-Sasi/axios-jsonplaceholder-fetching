import React from "react";
import "./Body.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Body = () => {
  const [users, setUsers] = useState([]);
  const defaultVal = {
    name: "",
  };
  const [post, setPost] = useState(defaultVal);

  const URL = "https://jsonplaceholder.typicode.com";
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const addUser = () => {
    axios
      .post(`${URL}/users`, post)
      .then((response) => {
        setUsers([...users,response.data])
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const usersList = () => {
    axios
      .get(`${URL}/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    usersList();
  }, []);

  return (
    <>
      <div className="wrapper">
        <input type="text" name="name" onChange={handleChange} />
        <button onClick={addUser}>add users</button>
      </div>
      {users.map((ele) => {
        return (
          <>
            <li className="list">{ele.name}</li>
          </>
        );
      })}
    </>
  );
};

export default Body;