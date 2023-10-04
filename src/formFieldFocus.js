import React ,{useRef} from 'react';



const FormFieldFocus=()=>{

//let index=vb[0].length-1;
const useref=useRef();
console.log('ref',useref)
const handleKeyPress = (event, index) => {
  console.log('event=>',event)
    if (event.key === 'Enter') {
      event.preventDefault();
     const vb=document.querySelectorAll('form');
     const element = event.target;
    const nextSibling = element.nextElementSibling;
    //nextSibling ? nextSibling.focus() : element.blur(); //is se kaya hoga ki
    nextSibling && nextSibling.focus() 
    }
  };
return (
    <>
    
    <form id='form' > 
  
  <input  type="text" id="fname" ref={useref} name="fname" onKeyPress={(e) => handleKeyPress(e,0)} />
  
  <input type="text" id="lname" ref={useref} name="lname" onKeyPress={(e) => handleKeyPress(e,1) }/>
  
  <input type="text" id="email" ref={useref} name="email" onKeyPress={(e) => handleKeyPress(e,2) } />

  <input type="text" id="addredd" name="addredd" onKeyPress={(e) => handleKeyPress(e,3) }/>

  </form>



    </>
)

};

export default FormFieldFocus;