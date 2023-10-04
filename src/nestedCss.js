import React from "react";
import "./nestedstyles.css";

const NestedCss = () => {

  
  return (
    <div >
      <p>Hoio</p>
  <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Marks</th>
          <th>test1</th>
          <th>address</th>
          <th style={{ color: "red" }}>phone</th>
        </tr>
        <tr>
          <td>qww</td>
          <td>12</td>
          <td>34</td>
        </tr>
        <tr>
          <td>tyy</td>
          <td>35</td>
          <td>345</td>
        </tr>
        <tr>
          <td>uio</td>
          <td>35</td>
          <td>5</td>
        </tr>
      </table>

      
    </div>
  );
};

export default NestedCss;
