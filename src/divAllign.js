import react from "react";

const DivAllign = () => {
  return (
    <div
      style={{
        display: "flex",

        //flexWrap: "wrap",
        justifyContent: "center", //JusttifyContent is css flexbox prop and justifyItems: "center" is css grid prop, so dnt be confused..
        alignItems: "center", //Jab multiple line/row ho jate hai to alignItems work nahi karta..uske liye alignContent use karna padta hai and alignContent ke saht flexWrap: "wrap" hona chahiye..
        height: "100vh", //Flexbox can only center vertically if it has space to work with (e.g., a height is set). if no height then your outer <div> only has the height of its content — so alignItems: "center" has no effect.
      }}
    >
      <div style={{ transform: "rotate(0deg)" }}>div --1</div>
      <div style={{ transform: "translateY(50px)" }}>div --2</div>
      <div style={{ transform: "translateY(100px)" }}>div --3</div>
    </div>
  );
};

export default DivAllign;
