import React from 'react'
import { Box, Container, Typography,Grid,Button } from '@mui/material'
import STAR2 from './STAR 2.png';
import { BsLock } from 'react-icons/bs'

function Component() {
    const typo = {
        color: "#FFFFFF",
        marginTop: "15px",
        textAlign:"left"
      };
      const bt = {
        borderRadius: "8px",
        background: ` #AD00FF`,
        width: "150px",
        height: "50px",
        margin: "auto",
        color: "#FFFFFF",
        fontSize: "12px",
        fontWeight: 600,
        fontFamily: "Roboto",
        // marginBottom:"6rem",
        marginTop: "5rem"
      }
  return (
    <>
      <Box sx={{
        background: `#030731`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        objectPosition: "center",
        padding:"1rem 0",
        paddingBottom:"3rem",
        // height:"100vh"
      }}>
        <Container>
           <Grid xs={12} md={12}>
          <Typography sx={{
            fontFamily: "Poppins",
            fontSize: "36px",
            fontWeight: 400,
            textAlign: "left",
            color: "#FFFFFF",
          }}>Solardex Calculator
          </Typography> 
          <img src={STAR2} style={{marginTop:"-10rem"}} />
           </Grid>
           <Box sx={ {background: `#0C166C`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        objectPosition: "center",
        padding:"2rem"}}>
        <Box sx={{display:"flex", justifyContent:"center", gap:"10%"}}>
        <Typography sx={{
            fontFamily: "Poppins",
            fontSize: "28px",
            fontWeight: 400,
            textAlign: "left",
            color: "#FFFFFF",
          }}>BlockBrain-Solar
          </Typography>
          
          <Typography sx={{
            fontFamily: "Poppins",
            fontSize: "25px",
            fontWeight: 400,
            textAlign: "left",
            color: "#FFFFFF",
          }}>APR
          </Typography>

          <Typography sx={{
            fontFamily: "Poppins",
            fontSize: "25px",
            fontWeight: 400,
            textAlign: "left",
            color: "#FFFFFF",
          }}>120%
          </Typography>

          <Typography sx={{
            fontFamily: "Poppins",
            fontSize: "25px",
            fontWeight: 400,
            textAlign: "left",
            color: "#FFFFFF",
          }}>$164.154.072
          </Typography>

          <Typography sx={{
            fontFamily: "Poppins",
            fontSize: "25px",
            fontWeight: 400,
            textAlign: "left",
            color: "#FFFFFF",
          }}><BsLock style={{ color: "#FFFFFF" }} />60Days
          </Typography>
           </Box>
           <Grid container>
            <Grid item xs={6} md={4} pl={4} >
            <Typography sx={typo}>Get blockbrain solor</Typography>
            <Typography sx={typo}>View Contract</Typography>
            <Typography sx={typo}>See pair info</Typography>
            </Grid>
            <Grid item xs={6} md={4} pr={4} mt={6} >
            <Typography sx={typo} variant="h4">Solar</Typography>
            <Typography sx={typo} variant="p">you will get 120 blockbrain</Typography>
            </Grid>
            <Grid item xs={6} md={4} mt={4} >
            <Button sx={bt} style={{ marginLeft: "10rem" }}>Connect Wallet</Button>
            </Grid>
            </Grid>
           </Box>
        </Container>
      </Box>
    </>
  )
}

export default Component