import React from 'react';

const Boxmodal=()=>{

return (
    <>

{/* we can find element width=>document.getElementById('span').offsetWidth */}

{/* Note  ==> https://web.stanford.edu/class/archive/cs/cs193x/cs193x.1176/lectures/05/block-inline#:~:text=The%20height%20and%20width%20of%20an%20inline%20element%20cannot%20be,break%20(%20) */}

{/* Note===>https://www.samanthaming.com/pictorials/css-inline-vs-inlineblock-vs-block/ */}

{/* Note=>https://www.w3schools.com/css/css3_box-sizing.asp */}

    {/* The CSS box-sizing property allows us to include the padding and border in an element's total width and height */}

    {/* below div1 when not using box sizing property , than width =220 {200 +padingright ->20},waise bhi default value box-size is box-content hi hota */}
    <div id='div1' style={{height:'200px',width:'200px',paddingRight:'20px',backgroundColor:'red',marginBottom:'30px'}}>Hii</div>  

{/* below div2 when using box sizing property , than width =200, yaha border-box use kiya, so width me hi padding and border include hota hai. */}
    <div id='div2' style={{boxSizing:'border-box' ,height:'200px',width:'200px',paddingRight:'20px',backgroundColor:'red',marginBottom:'30px'}}>Hii</div>  

{/* inline element content ke hisab se height width leta..., iske behaviour ko dialy =block se change kar sakte... */}
{/* <span id='span'style={{height:'200px',width:'200px',paddingRight:'20px',backgroundColor:'red',marginBottom:'30px'}}> prem</span> */}
    </>
   

)

};

export default Boxmodal;