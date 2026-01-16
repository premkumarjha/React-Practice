import Raect, { useState } from "react";

const Multistepform = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const renderSelectedTabComponent = () => {
    if (tabIndex == 0) {
      return "first index";
    } else if (tabIndex == 1) {
      return "second index";
    } else if (tabIndex == 2) {
      return "third index";
    }
  };
  console.log("imdex", tabIndex);
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            margin: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: 30,
              width: 30,
              borderRadius: 50,
              backgroundColor: "green",
              textAlign: "center",
            }}
            onClick={() => {
              setTabIndex(0);
            }}
          >
            1
          </div>
          <div
            style={{ height: 3, width: 100, backgroundColor: "black" }}
          ></div>
          <div
            style={{
              height: 30,
              width: 30,
              borderRadius: 50,
              backgroundColor: "green",
              textAlign: "center",
            }}
            onClick={() => {
              setTabIndex(1);
            }}
          >
            2
          </div>
          <div
            style={{ height: 3, width: 100, backgroundColor: "black" }}
          ></div>
          <div
            style={{
              height: 30,
              width: 30,
              borderRadius: 50,
              backgroundColor: "green",
              textAlign: "center",
              marginRight: 50,
            }}
            onClick={() => {
              setTabIndex(2);
            }}
          >
            3
          </div>
        </div>
        {renderSelectedTabComponent()}
      </div>
    </>
  );
};
export default Multistepform;
