import React from "react";
import { Prem, Button, TomatoButton,TableWraper,Input } from "./styledcomponentstyle";



const StyledComponent = () => {
  let a=false;
  let b=null;
  let c=a ?? 'ram'
  console.log('c is',c);
  return (
    <>
<Input error='error'/> 
      <Prem clr="poo">Hii</Prem>
      <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
      <TableWraper>

        <hr></hr>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Marks</th>
          <th>test1</th>
          <th>address</th>
          <th>phone</th>
        </tr>
        <tr>
          <td>qww</td>
          <td>12</td>
          <td>34</td>
          <td>qww</td>
          <td>12</td>
          <td>34</td>
        </tr>
        <tr>
          <td>tyy</td>
          <td>35</td>
          <td>345</td>
          <td>qww</td>
          <td>12</td>
          <td>34</td>
        </tr>
        <tr>
          <td>uio</td>
          <td>35</td>
          <td>5</td>
          <td>qww</td>
          <td>12</td>
          <td>34</td>
        </tr>
      </table>
     </TableWraper>

      {/* Theming  + attrs()   practice....from documentations... */}
    </>
  );
};

export default StyledComponent;
