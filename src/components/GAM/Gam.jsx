import React from 'react'
import { Box, Button, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import BG1 from './bg2.png'
import VEC from './Vector 27.png'
import IMG from './8 1.png'
import BTN from './Group 40.png'
import box1 from '../../images/box1.png';
import box2 from '../../images/box2.png';
function Gam() {
  const matches = useMediaQuery('(min-width:600px)')
  const bt = {
    borderRadius: "8px",
    background: ` linear-gradient(180deg, #6ED559 0%, #2B5B29 100%)`,
    width: "230px",
    height: "55px",
    margin: "auto",
    color: "#FFFFFF",
    fontSize: "24px",
    fontWeight: 700,
    fontFamily: "Roboto",
    
    // marginBottom:"6rem",
    marginTop: "5rem"
    // transform:"matrix(0.81, 0.05, -1.01, 1, 0, 0)"
  }
  
  return (
    <>
      <Box sx={{
        background: `linear-gradient( rgba(0.9, 0.6, 0.5, 0.8), rgba(0.9, 0.6, 0.5, 0.8) ),url(${BG1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        // padding:"1.4rem 0",
        // paddingBottom:"8rem",
        // height:"100vh"
      }}>
        <Container>
          <Typography sx={{
            fontFamily: "Metal Mania",
            fontSize: "4em",
            fontWeight: 400,
            textAlign: "center",
            background: "linear-gradient(180deg, #6ED559 0%, #2B5B29 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>WHAT’S THETAN GAM?</Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={3} mt={14}>
              <Box sx={{display:"flex",flexDirection:"column",justifyContent: "flex-end",marginLeft:!matches ? "0":"8rem",marginTop:"3rem"}} >
                <Button sx={bt} >FREE TO EARN</Button>
                <Button sx={bt} >MARKET</Button>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>

              <div className='inside-img' style={{
                background: `url(${VEC})`,
                // margin:"2rem auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",

              }}>
                <img src={IMG} alt="" style={{ width: !matches ? '30%' : "30%",marginLeft:"11rem", marginTop: "5rem" }} />
              </div>
            </Grid>

            <Grid item xs={12} md={3} mt={20}>
              <Box sx={{display:"flex",justifyContent:"center", flexDirection:"column", marginLeft:!matches ? "0":"-12rem", alignItems:"center"}}>
                <Button sx={bt} >EVOLVE HEROES</Button>
                <Button sx={bt} >STAKING</Button>
              </Box>
            </Grid>
          </Grid>
          <Grid xs={6} md={12} >
            <p style={{
              fontSize: "4em",
              fontFamily: "Metal Mania",
              fontWeight: 400,
              background: "linear-gradient(180deg, #6ED559 0%, #2B5B29 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
              textTransform: "uppercase",
            }}>CORE TEAM</p>

            <Typography sx={{
              fontSize: "16px",
              fontFamily: "'Roboto', sans-serif",
              fontStyle: "normal",
              color: "#FFFFFF",
              textAlign: "center",
              padding: "0 8rem",
              fontWeight: 200,
            }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>

          </Grid>
        </Container>
        <Box sx={{
              justifyContent:"space-between",
              textAlign:"center",
              marginTop:"2rem"
            }}>
         
              <img src={box1} alt="" style={{ width: "200px" }} />
           
              <img src={box1} alt="" style={{ width: "200px" }} />
           
              <img item src={box1} alt="" style={{ width: "200px" }} />
           
              <img src={box2} alt="" style={{ width: "200px" }} />
            
              <img item src={box1} alt="" style={{ width: "200px" }} />
          
            
              <img src={box1} alt="" style={{ width: "200px" }} />
            
            </Box>
      </Box>

    </>
  )
}

export default Gam