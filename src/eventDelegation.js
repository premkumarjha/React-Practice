import React from 'react'


const EventDelegation=()=>{


    const handleClick = (event) => {
        console.log(event.target.textContent);
        if(event.target.tagName === 'li'){
          console.log(event.target.textContent);
        }
      };
    
      
        return(
          <ul onClick={(e)=>handleClick(e)}>
            <li> Item 1 </li>
            <li> Item 2 </li>
            <li> Item 3 </li>
          </ul>
        );
    
    }



export default EventDelegation;