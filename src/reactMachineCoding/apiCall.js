import React, { useState, useEffect } from "react";
import axios from "axios";
const FetchData = () => {
  const [data, setData] = useState([]);
  //const []

  const url = "https://jsonplaceholder.typicode.com/users";

  //https://jsonplaceholder.typicode.com/users ? page='1'&limit='10'&sortOrder='asc'&sortBy ='fieldName'

  //====>sort wo backend side, UI will send ki koan sa field and koan sa order

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (e) {
      console.log("e=>", e);
    }
  };

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
        </tr>
        {data.map((v) => {
          return (
            <tr>
              <td>{v.name}</td>
              <td>{v.username}</td>
              <td>{v.email}</td>
            </tr>
          );
        })}
        <tr></tr>
      </table>
    </div>
  );
};

export default FetchData;
