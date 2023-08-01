'use client';
import React from "react";
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import styles from "../../styles/Home.module.css";
// import Header from "../../components/Header";
import Head from "next/head";

import Image from 'next/image'

import CardMedia from '@mui/material/CardMedia';

import Container from '@mui/material/Container';
// import foodImage from '../images/food.jpg';



export default function Aboutus() {

  
  
    
return(
 <>
     <AboutUsContent/>
</>
)

}

function AboutUsContent (){
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'gray',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    justifyContent:"center",
  }));
  return( <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid xs={6} style={{minHeight:"200px"}} >
        <Item>
        <img
          style={{objectFit:"cover",width:"100%"}}
          src="./images/food.jpg"
          alt="Next.js Logo"
          // width={100}
          // height={100}
          // priority
        />
      
        </Item>
      </Grid>
      <Grid xs={6}  style={{minHeight:"200px"}}>
        <Item><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting,
             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p></Item>
      </Grid>
      </Grid>
      </Box>)
}