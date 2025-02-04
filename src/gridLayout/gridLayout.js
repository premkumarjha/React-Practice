
import React from 'react';

import "../App.css";


//concepts ===>pehle jine rows and column chahiye wo bana lo
//after jisko ak sath karna wo karo ,ex: grid-column or grid-row...use kar lo
//Now jitne bhi extra phaltu ke extra div or jo bhi extra ban rahaa and  nahi chaiye, just comment or remove those.
//implicit div/row jo khud se usko ->grid-auto-rows or chatgpt
//Note ===>jab unit % me do to be carefull, unit ko direct % dene se wo refect nahi hoga, it depends ki uske nearest parent ka kaay measaurment , 
//Q ki % relative unit hai so wo parent ke measurenment ke hisab se lega..., parent koan hai ..ye inpecte karo waha dikhta ki nearenst parent koan..., koi parent nahi phir wo root..
//100vh height and width se wo pura view port ke hisab se height width le lega.





const GridLayout=()=>{

  
   
  return (
    <>
    {/* example 1 */}
    
    <div className='container'>
<div className='firstclass'>1</div>
<div className='secondclass'>2</div>
<div className='thirdclass' >3</div>
<div className='fourthclass' >4</div>
<div className='fifthclass'>5</div>
<div className='sixthclass'>6</div>
{/* <div className='seventhclass' >7</div>
<div className='eightclass'>8</div>
<div className='nineclass'>9</div> */}

    </div>
      
    </>
  );
};

export default GridLayout;