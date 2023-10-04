import React, { useState } from "react";

//heigher order component simply takes the original component and returns the enhanced component.
const Hoc = (Wrapedcomponent) => {
  //yaha useState or...to error dega....as i have check for below setData,so i have moved to inside NewModifiedComponent.
  const NewModifiedComponent = () => {
    const [data, setData] = useState([
      { firstName: "John", lastName: "Doe", age: 23 },

      { firstName: "Mary", lastName: "Smith", age: 32 },
    ]);
    return <Wrapedcomponent userdata={data} />;
  };
  return NewModifiedComponent;
};

export default Hoc;
