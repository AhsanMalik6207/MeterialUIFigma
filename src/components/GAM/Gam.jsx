import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import BG1 from './bg2.png'
import VEC from './Vector 27.png'
import IMG from './8 1.png'
import BTN from './Group 40.png'
import box1 from '../../images/box1.png';
import box2 from '../../images/box2.png';
function Gam() {
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
        objectFit: "cover",
        objectPosition: "center",
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
          <Grid container>
            <Grid item xs={6} md={4}>
              <Button sx={bt} style={{ marginLeft: "10rem", marginTop: "13rem" }}>FREE TO EARN</Button>
              <Button sx={bt} style={{ marginLeft: "10rem" }}>MARKET</Button>
            </Grid>

            <Grid item xs={6} md={4}>
              <div className='inside-img' style={{
                background: `url(${VEC})`,
                // margin:"2rem auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}>
                <img src={IMG} alt="" style={{
                  width: "150px",
                  marginTop: "5rem",
                  marginLeft: "6.6rem"
                }} />

              </div>

            </Grid>
            <Grid item xs={6} md={4}>
              <Button sx={bt} style={{ marginTop: "13rem" }}>EVOLVE HEROES</Button>
              <br />
              <br />
              <Button sx={bt}>STAKING</Button>
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
              padding: "0 7rem",
              fontWeight: 200,
            }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
          </Grid>

          {/* <Grid container>
            <Grid item xs={6} md={2}>
              <img src={box1} alt="" style={{ width: "200px" }} />
            </Grid>
            <Grid item xs={6} md={2}>
              <img src={box1} alt="" style={{ width: "200px" }} />
            </Grid>
            <Grid item xs={6} md={2}>
              <img item src={box1} alt="" style={{ width: "200px" }} />
            </Grid>
            <Grid item xs={6} md={2}>
              <img src={box2} alt="" style={{ width: "200px" }} />
            </Grid>
            <Grid item xs={6} md={2}>
              <img item src={box1} alt="" style={{ width: "200px" }} />
            </Grid>
            <Grid item xs={6} md={2}>
              <img src={box1} alt="" style={{ width: "200px" }} />
            </Grid>
          </Grid> */}
        </Container>
      </Box>
    </>
  )
}

export default Gam