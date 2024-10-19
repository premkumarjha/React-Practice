import React from 'react';
import { useForm } from "react-hook-form";
const About=()=>{

  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) =>{
    console.log('hiiii=>',data)
  }
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: "f name  is required"   })} />
      {errors.firstName && <p style={{color:'red'}}>First name is required</p>}
      <input {...register("lastName", {required: "l name  is required"   })} />
      {errors.lastName && <p style={{color:'red'}}>lastName  is required</p>}
   
      <input type="submit" />
    </form>
  );
};

export default About;