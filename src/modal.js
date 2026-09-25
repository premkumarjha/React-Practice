import React, { useState } from "react";

const DialogComponent = (props) => {
  const [isModal, setIsModal] = useState(true);
  //save handler
  const saveHandler = () => {
    setIsModal(false);
  };

  //cancel handler
  const cancelHandler = () => {
    setIsModal(false);
  };

  //outside click handler
  const outsideClickHandler = (e) => {
  
      setIsModal(false);
 

  };

  return (
    <>
      {isModal && (
        <div
          style={{
            background: "rgba(0,0,0,0.5)",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={(e) => outsideClickHandler(e)}
        >
          {/* container */}
          <div
            style={{
              height: 300,
              width: 500,
              backgroundColor: "white",
              
            }}
            onClick={(e) => e.stopPropagation()} ///====>Very Impporant to close moal when click outside the modal but snt close when clcik on modal..
          >
            {/* title */}
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                alignItems: "left",
                padding: 20,
              }}
            >
              success Message
            </div>

            {/* content */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
              }}
            >
              This comprehensive Python and DSA Masters course covers everything
              from programming fundamentals to advanced data structures and
              algorithms. Structured with a clear Monday-Wednesday-Friday
              release plan, it includes 80+ real-world subtopics, hands-on API
              projects, and capstone-level interview-ready challenges. Perfect
              for developers, job seekers, and CS students looking to build
              strong foundations...
            </div>
            {/* Action buttons, Note: ==>always try to add padding in button */}
            <div
              style={{
                display: "flex",
                justifyContent: "right",
                alignItems: "right",
                padding: 20,
              }}
            >
              <button
                style={{
                  widht: 40,
                  height: 40,
                  padding: "10px 20px",
                  marginRight: 15,
                }}
                onClick={() => saveHandler()}
              >
                Save the Item
              </button>
              <button
                style={{ widht: 40, height: 40, padding: "10px 20px" }}
                onClick={() => cancelHandler()}
              >
                Cancel the Item
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DialogComponent;
