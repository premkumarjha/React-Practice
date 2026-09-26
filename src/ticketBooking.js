import { selectClasses } from "@mui/material";
import react, { useState, useEffect, useRef } from "react";

const TicketBookingComponent = () => {
  const ref = useRef(null);
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  let totalTicketPrice = 0;
  const seatColors = {
    A: "gray",
    B: "gray",
    C: "#27CCF5",
    D: "#27CCF5",
    E: "#27CCF5",
    F: "Yellow",
    G: "Yellow",
    H: "Yellow",
  };

  const price = {
    A: 150,
    B: 150,
    C: 200,
    D: 200,
    E: 200,
    F: 300,
    G: 300,
    H: 300,
  };
  console.log("selectedSeats", selectedSeats);
  console.log("ref is", ref?.current?.style?.backgroundColor);
  const cost = selectedSeats.forEach((v) => {
    totalTicketPrice += price[v.split("")[0]];
    //console.log(price[v.split('')[0]])
    console.log(totalTicketPrice);
  });
  const bookSeatHandler = () => {};

  return (
    <>
      {/* //container */}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          backgroundColor: "whitesmoke",
        }}
      >
        {/* //most left */}
        <div style={{ flex: 10 }}>most left</div>
        {/* //center one */}
        <div
          style={{
            flex: 50,
            padding: "20px",
            display: "flex",
            flexDirection: "column",
           justifyContent: "space-around",
          //rowGap:'5px'
          }}
        >
          {/* //rows */}
          {rows.map((row) => (
            <div
              key={row}
              style={{ display: "flex", columnGap:'10px'}}
            >
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  padding: "7px",
                  textAlign: "center",
                }}
              >
                {row}
              </div>
              {seats.map((seat) => (
                <button
                  key={`${row}-${seat}`}
                  ref={ref}
                  style={{
                    height: "30px",
                    width: "30px",
                    backgroundColor: selectedSeats.includes(`${row} ${seat}`)
                      ? "green"
                      : seatColors[row],

                    borderTopLeftRadius: "25%",
                    borderTopRightRadius: "25%",
                    padding: "7px",
                    textAlign: "center",
                  }}
                  onClick={() => {
                    setSelectedSeats([...selectedSeats, `${row} ${seat}`]);
                    // console.log(
                    //   "selectedSeats.includes(`${row} ${seat}`)",
                    //   selectedSeats.includes(`${row} ${seat}`),
                    // );
                  }}
                >
                  {seat}
                </button>
              ))}
            </div>
          ))}
          {/* <div style={{display:"flex",justifyContent:'space-around',}}>
                <div style={{height:'30px',width:'30px',padding:'7px',textAlign:'center'}}>A</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>1</div> */}
          {/* <div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>2</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>3</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>4</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>5</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>6</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>7</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>8</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>9</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>10</div> */}
          {/* </div> */}
          {/* <div style={{display:"flex",justifyContent:'space-around'}}>
                <div style={{height:'30px',width:'30px',padding:'7px',textAlign:'center'}}>B</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>1</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>2</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>3</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>4</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>5</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>6</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>7</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>8</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>9</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>10</div>
            </div>
        
         <div style={{display:"flex",justifyContent:'space-around'}}>
                <div style={{height:'30px',width:'30px',padding:'7px',textAlign:'center'}}>C</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>1</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>2</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>3</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>4</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>5</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>6</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>7</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>8</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>9</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>10</div>
            </div>
        <div style={{display:"flex",justifyContent:'space-around'}}>
                <div style={{height:'30px',width:'30px',padding:'7px',textAlign:'center'}}>D</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>1</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>2</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>3</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>4</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>5</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>6</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>7</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>8</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>9</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>10</div>
            </div>
            <div style={{display:"flex",justifyContent:'space-around',}}>
                <div style={{height:'30px',width:'30px',padding:'7px',textAlign:'center'}}>E</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>1</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>2</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>3</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>4</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>5</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>6</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>7</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>8</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>9</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>10</div>
            </div>
            <div style={{display:"flex",justifyContent:'space-around',}}>
                <div style={{height:'30px',width:'30px',padding:'7px',textAlign:'center'}}>F</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>1</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>2</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>3</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>4</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>5</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>6</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>7</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>8</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>9</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>10</div>
            </div>
            <div style={{display:"flex",justifyContent:'space-around',}}>
                <div style={{height:'30px',width:'30px',padding:'7px',textAlign:'center'}}>G</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>1</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>2</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>3</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>4</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>5</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>6</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>7</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>8</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>9</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>10</div>
            </div> */}

          {/* <div style={{display:"flex",justifyContent:'space-around',}}>
                <div style={{height:'30px',width:'30px',padding:'7px',textAlign:'center'}}>H</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>1</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>2</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>3</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>4</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>5</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>6</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>7</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>8</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>9</div>
<div style={{height:'30px',width:'30px',backgroundColor:'gray',borderTopLeftRadius:'25%',borderTopRightRadius:'25%',padding:'7px',textAlign:'center'}}>10</div>
            </div> */}
        </div>
        {/* //most right */}
        <div
          style={{
            flex: 40,
            display: "flex",
            justifyContent: 'center',
            flexDirection: "column",
            // margin:'40px'
            rowGap: '50px'
          }}
        >
          <div style={{ display: "flex" ,gap: "15px"}}>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  backgroundColor: "gray",
                  borderTopLeftRadius: "25%",
                  borderTopRightRadius: "25%",
                  padding: "7px",
                  textAlign: "center",
                }}
              ></div>
              <div style={{ textAlign: "center" }}>Regular(150)</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  backgroundColor: "#27CCF5",
                  borderTopLeftRadius: "25%",
                  borderTopRightRadius: "25%",
                  padding: "7px",
                  textAlign: "center",
                }}
              ></div>
              <div style={{ textAlign: "center" }}>Premium(200)</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  backgroundColor: "yellow",
                  borderTopLeftRadius: "25%",
                  borderTopRightRadius: "25%",
                  padding: "7px",
                  textAlign: "center",
                }}
              ></div>
              <div style={{ textAlign: "center" }}>VIP(300)</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  backgroundColor: "green",
                  borderTopLeftRadius: "25%",
                  borderTopRightRadius: "25%",
                  padding: "7px",
                  textAlign: "center",
                }}
              ></div>
              <div style={{ textAlign: "center" }}>Booked</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>No of seats Booked:{selectedSeats.length}</p>
            <p>Booked Seats:{[...selectedSeats]}</p>
            <p>Total Price:{totalTicketPrice}</p>
            <button
              type="button"
              onClick={() => bookSeatHandler()}
              style={{ widht: "80px", height: "30px" }}
            >
              {`Book ${selectedSeats.length} seat - ${totalTicketPrice}`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketBookingComponent;
