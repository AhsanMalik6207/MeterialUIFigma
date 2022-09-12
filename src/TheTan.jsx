import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BLACKGREEN from './images/blacGreen.png';
import FOURLINES from './images/Foutlines.png';
import greenBTN1 from './images/greenBTN1.png';
import greenBTN2 from './images/greenBTN2.png'
import BOY from './images/boy.png';
import { Container, Typography, useMediaQuery } from '@mui/material';
import box1 from './images/box1.png';
import box2 from './images/box2.png';
import { padding } from '@mui/system';
export default function TheTan() {
  const matches = useMediaQuery('(min-width:600px)')
  return (
    <Box pb={30} sx={{
      // backgroundColor: "#373030",
      backgroundImage: `url(${BLACKGREEN}) ,linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(5, 5, 29, 1) 8%)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      padding:"1.3rem 0"
    }}>
      <Container>
      <p style={{
                    fontSize:"4em",
                    fontFamily:"Metal Mania",
                    fontWeight:400,
                    background:"linear-gradient(180deg, #6ED559 0%, #2B5B29 100%)",
                    WebkitBackgroundClip:"text",
                    WebkitTextFillColor:"transparent",
                    textAlign:"center",
                    textTransform:"uppercase",
                }}>WHATS THETAN GAM?</p>
      <Grid container>
        <Grid xs={12} md={3}>
          <img src={greenBTN1} alt=""  style={{width: !matches ? '40%' : "70%", paddingLeft:"5rem", paddingTop:"11rem"}} />
        </Grid>
        <Grid xs={6} md={6} sx={{padding:"0",marging:"0"}}>
          <img src={FOURLINES} alt="" style={{width: !matches ? '40%' : "70%"}} />
          <img src={BOY} alt="" style={{width: !matches ? '60%' : "50%", marginTop:"-21rem", height:"50%",width:"45%", marginLeft:"4rem"}} />
        </Grid>
        <Grid xs={12} md={3}>
          <img src={greenBTN2} alt="" style={{width: !matches ? '50%' : "70%", paddingTop:"11rem", paddingRight:"9rem"}}  />
        </Grid>
        <Grid xs={12} md={12} >
        <p style={{
                    fontSize:"4em",
                    fontFamily:"Metal Mania",
                    fontWeight:400,
                    background:"linear-gradient(180deg, #6ED559 0%, #2B5B29 100%)",
                    WebkitBackgroundClip:"text",
                    WebkitTextFillColor:"transparent",
                    textAlign:"center",
                    textTransform:"uppercase",
                }}>CORE TEAM</p>

          <Typography sx={{
            fontSize: "16px",
            fontFamily: "'Roboto', sans-serif",
            fontStyle: "normal",
            color: "#FFFFFF",
            textAlign: "center",
            padding: "0 7rem",
            fontWeight: 200,
            marginBottom: "1.5rem"
          }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>

        </Grid>
        <Grid xs={12} md={2}>
          <img src={box1} alt="" style={{ width: "200px" }} />
        </Grid>
        <Grid xs={12} md={2}>
          <img src={box1} alt="" style={{ width: "200px" }} />
        </Grid>
        <Grid xs={12} md={2}>
          <img src={box1} alt="" style={{ width: "200px" }} />
        </Grid>
        <Grid xs={12} md={2}>
          <img src={box2} alt="" style={{ width: "200px" }} />
        </Grid>
        <Grid xs={12} md={2}>
          <img src={box1} alt="" style={{ width: "200px" }} />
        </Grid>
        <Grid xs={12} md={2}>
          <img src={box1} alt="" style={{ width: "200px" }} />
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
}
