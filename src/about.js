import { red } from '@mui/material/colors';
import React from 'react';
import { useForm } from "react-hook-form";
import "./App.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Height } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const About=()=>{

  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) =>{
    console.log('hiiii=>',data)
  }
   
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: "f name  is required"   })} />
      {errors.firstName && <p style={{color:'red'}}>First name is required</p>}
      <input {...register("lastName", {required: "l name  is required"   })} />
      {errors.lastName && <p style={{color:'red'}}>lastName  is required</p>}
   
      <input type="submit" />
    </form>
    {/* <div className='container'>
<div className='firstclass'>1</div>
<div className='secondclass'>2</div>
<div className='thirdclass' >3</div>
<div className='fourthclass' >4</div>
<div className='fifthclass'>5</div>
<div className='sixthclass'>6</div>
<div className='seventhclass' >7</div>
<div className='eightclass'>8</div>
<div className='nineclass'>9</div>

    </div>
      */}
    </>
  );
};

export default About;