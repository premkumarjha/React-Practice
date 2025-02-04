
import React from 'react';
import { useForm } from "react-hook-form";
import "../App.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { yellow } from '@mui/material/colors';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
  height:300,
}));

const MaterialUiGridLayout=()=>{

   
  return (
    <>
   

   
      <Box sx={{margin:10,}} >
    <Grid  container sx={{backgroundColor:'whitesmoke',padding:2,}} spacing={2}>
  <Grid size={12} >
    <Item sx={{backgroundColor:'aquamarine'}}>size=8</Item>
  </Grid>
  <Grid size={4}>
    <Item sx={{backgroundColor:'yellow'}}>size=4</Item>
  </Grid>
  <Grid container size={8}>

    
        
    <Grid size={4}>
    <Item sx={{backgroundColor:'red'}}>content 1</Item>
  </Grid>
  <Grid size={8}>
    <Item sx={{backgroundColor:'pink'}}>content 2</Item>
  </Grid>
  
 
  </Grid>
  <Grid size={12}>
    <Item sx={{backgroundColor:'aquamarine'}}>footer</Item>
  </Grid>
</Grid>
</Box>
    </>
  );
};

export default MaterialUiGridLayout;