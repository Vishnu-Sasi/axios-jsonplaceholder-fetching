import React from "react";
import "./Body.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Body = () => {
  const [users, setUsers] = useState([]);
  const handleChange =(e)=>{
    console.log(e.target.value)
 }
 const handleClick =()=>{

 }
  const usersList = () => {
    
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
      
  };
 
  useEffect(() => {
    usersList();
    
  },[]);
  
  return (
    <>
      <div className="wrapper">
        <input type="text" onChange={handleChange}/>
        <button onClick={handleClick}>add users</button>
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
