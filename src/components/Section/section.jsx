import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography, useMediaQuery } from '@mui/material';
import BG3 from './BG3.png';
import GROUP5 from './Group 5.png';
import HAND from './HAND.png';
import VECTOR4 from './Vector 4.png';
export default function Section3() {
  const matches = useMediaQuery('(min-width:600px)')
  return (
    <Box pb={30} sx={{
      // backgroundColor: "#373030",
        backgroundImage:`url(${BG3}) ,linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(5, 5, 29, 1) 8%)`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundBlendMode :"overlay",
        padding:"1.4rem 0"

        // opacity:0.15,
        // height:"100vh,"
    }}>
      <Container>
      <p className='gameplay' style={{
                    fontSize:"4em",
                    fontFamily:"Metal Mania",
                    fontWeight:400,
                    background:"linear-gradient(180deg, #6ED559 0%, #2B5B29 100%)",
                    WebkitBackgroundClip:"text",
                    
                    WebkitTextFillColor:"transparent",
                    textAlign:"center",
               
                    textTransform:"uppercase",
                }}>gameplay</p>
      <Grid container>
        <Grid xs={12} md={12} >
                    <Typography sx={{
                        fontSize:"20px",
                        fontFamily:'Roboto',
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"center",
                        fontWeight:200,
                        marginBottom:"1.5rem",
                        maxWidth:"600px",
                        margin:"auto"
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>

        </Grid>
        <Grid xs={12} md={12}>
        <img src={GROUP5} alt="" width={'100%'} />
        </Grid>
        
        <Grid xs={12} md={6}>
        <img src={HAND} alt="" style={{width: !matches ? '40%' : "70%"}} />
        </Grid>
        <Grid xs={12} md={6}>
        
        <Typography sx={{fontSize:"24px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"left",
                        fontWeight:200,
                        background:"linear-gradient(90deg, #2B5B29, 1%, #2BFF0000)"
                        }}>BATTLE ROYALE<br/> Solo-Duo</Typography>
        <Typography sx={{
                        fontSize:"14px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"left",
                        fontWeight:200,
                        margin:"auto"
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
        </Grid>
        
                   


        <Grid xs={12} md={12}>
        <img src={VECTOR4} alt="" width={'100%'} />
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
}
