import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const NoteForm=()=>{


return(
<>
<div style={{margin:'20px'}}>


    <input placeholder='title'  style={{height:'50px',width:'300px',border :'2px solid '}}  /> 
    
    

<br/>
<br ></br>
<input placeholder='notes' style={{height:'200px',width:'300px', border :'2px solid '}}  /> 

<br>
</br>
<Button sx={{height:'40px', width:'140px',marginTop:'40px' }} mt='89' variant="contained" color="success">Add notes</Button>
</div>
</>

)

};
 export default NoteForm;