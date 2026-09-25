import React from "react";
import "../src/tooltip.css";

const Tooltip = ({ title, children }) => {
  return (
    <>
      <div style={{ height: 30, width: 100, margin: 100 }}>
        <p style={{ border: "1px black" }}>{title}</p>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Tooltip;
